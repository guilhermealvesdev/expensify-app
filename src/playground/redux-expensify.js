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
const editExpense = (id, mudancas) => {
    return {
        type:'EDIT_EXPENSE',
        id,
        mudancas
    }
}

// SET_TEXT_FILTER
const setTextFilter = (texto = "") => {
    return {
        type:"SET_TEXT_FILTER",
        texto
    }
}
// SORT_BY_DATE
const sortByDate = () => {
    return {
        type: "SORT_BY_DATE"
    }
}
// SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type:"SORT_BY_AMOUNT"
    }
}
// SET_START_DATE
const setStartDate = (dataComeco = undefined) => {
    return {
        type:"SET_START_DATE",
        dataComeco
    }
}

// SET_END_DATE
const setEndDate = (dataFim = undefined) => {
    return {
        type:"SET_END_DATE",
        dataFim
    }
}


//State padrão do Reducer.
const expensesReducerDefaultState = [];

//Reducer das Expenses.
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense] //Retornamos aqui a array do state modificada com o valor da despesa.
        case "REMOVE_EXPENSE":
            return state.filter((item) => {
                return item.id !== action.id //Aqui fazemos um filtro pra manter apenas os que não tiverem o ID passado pela action.
            });
        case "EDIT_EXPENSE": //Aqui criamos (usando map) e retornamos a nova array do state...
            return state.map((item) => {
                if (item.id === action.id) { //...fazendo uma validação pra ver se o id é o mesmo do que passado pela action...
                    return {
                        ...item, //e, se for, colocamos o valor padrão do item do state que passamos...
                        ...action.mudancas //...e implementamos as mudanças que foram passadas pela action.
                    }
                } else {
                    return item //se o id não for igual, ele retorna o item pra ser adicionado na array do state (senão fica undefined)
                }
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
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.texto
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                quantidade: 'quantidade'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                data: 'data'
            }
        case "SET_START_DATE":
            return {
                ...state,
                dataComeco: action.dataComeco
            }
        case "SET_END_DATE":
            return {
                ...state,
                dataFim: action.dataFim
            }
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

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(removeExpense({id: expenseThree.expense.id}));

const expenseFour = store.dispatch(addExpense({descricao: "Presente", quantidade: 300 }));


//Aqui chamamos EditExpense passando o que queremos mudar. No caso, precisamos passar o ID obrigatoriamente, e um objeto com os atributos que queremos mudar.
store.dispatch(editExpense(expenseOne.expense.id, { quantidade: 28579 }));


//Filtro de texto. Passamos o texto que queremos filtrar.
store.dispatch(setTextFilter('Aluguel'));
store.dispatch(setTextFilter(''));

//Filtro de quantidade. Sem parâmetros.
store.dispatch(sortByAmount());

//Filtro de data. Sem parâmetros.
store.dispatch(sortByDate());

//Filtro de início de data.
store.dispatch(setStartDate(125));

//Filtro de fim de data.
store.dispatch(setEndDate(985));
store.dispatch(setEndDate());



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