import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({descricao = "", nota = "", quantidade = 0, criadoEm = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            descricao,
            nota,
            quantidade,
            criadoEm
        }
    }
}

// REMOVE_EXPENSE
const removeExpense = ({id}) => {    
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}
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
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter((item) => {
                return item.id !== action.id
            });
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({descricao: "Teste", quantidade: 35000 }));
const expenseTwo = store.dispatch(addExpense({descricao: "Aluguel", quantidade: 922000 }));
const expenseThree = store.dispatch(addExpense({descricao: "Carro", quantidade: 1457000 }));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(removeExpense({id: expenseThree.expense.id}));

const expenseFour = store.dispatch(addExpense({descricao: "Presente", quantidade: 300 }));


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