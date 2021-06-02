import {createStore, combineReducers} from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


//State padrão do Reducer.
const expensesReducerDefaultState = [];

//Reducer das Expenses.
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

//State padrão do Reducer.
const filtersReducerDefaultState = {
    text: '',
    filtrarPor: 'data',
    dataComeco: undefined,
    dataFim: undefined
};

//Reducer dos Filtros.
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//Criando store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());


//Aqui criamos o esqueleto do que queremos.
const demoState = {
    expenses: [{
        id: 'adfidfsdfi',
        descricao: 'Aluguel de janeiro',
        nota: 'Foi o último aluguel pago',
        quantidade: 34000, //sem decimal para evitar problemas.
        criadoEm: 0 //timestamp        
    }],
    filters: {
        text: 'aluguel',
        filtrarPor: 'quantidade', // data ou quantidade
        dataComeco: undefined,
        dataFim: undefined
    }
}