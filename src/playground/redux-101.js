import { createStore } from 'redux';

/*
Action generator. Perceba que estamos destruturando (destructuring) a propriedade incrementBy e setando o valor padrão para 1.
Se não houver, setamos para um objeto vazio
*/
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count} = {}) => ({
    type:'SET',
    count: count
})

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

//O Redux fica de olho e dispara o .log sempre que houver alguma mudança no estado.
store.subscribe(() => {
    console.log(store.getState());
});

//Incrementar +5
store.dispatch(incrementCount({ incrementBy: 5 }));

//Incrementar +5
store.dispatch(incrementCount({ incrementBy: 10 }));

//Deixar para 0
store.dispatch(resetCount());

//Decrementar -1 (valor padrão)
store.dispatch(decrementCount());

//Decrementar -2
store.dispatch(decrementCount({decrementBy: 2}));

//Setar para 305
store.dispatch(setCount({count: 97498}));