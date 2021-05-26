import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1
            
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
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
store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
});

//Incrementar +1 (valor padrão)
store.dispatch({
    type: "INCREMENT"
});

//Deixar para 0
store.dispatch({
    type: "RESET"
});

//Decrementar -2
store.dispatch({
    type: "DECREMENT",
    decrementBy: 2
});

//Decrementar -1 (valor padrão)
store.dispatch({
    type: "DECREMENT",
});