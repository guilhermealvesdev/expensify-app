import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

console.log(store.getState());


//Incrementar
store.dispatch({
    type: "INCREMENT"
});

//Decrementar
store.dispatch({
    type: "INCREMENT"
});

//Deixar para 0
store.dispatch({
    type: "RESET"
});

//Decrementar
store.dispatch({
    type: "DECREMENT"
});



console.log(store.getState());