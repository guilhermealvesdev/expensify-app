import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize-css/normalize.css'; // Importando normalize.css do node_modules
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    //console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    //console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({descricao: "Conta de Água", quantidade: 48949849, criadoEm: -21000 }));
const expenseTwo = store.dispatch(addExpense({descricao: "Conta de Luz", quantidade: 922000, criadoEm: 1000}));
const expenseThree = store.dispatch(addExpense({descricao: "Gasolina", quantidade: 1457000, criadoEm: -3252 }));
const expenseFour = store.dispatch(addExpense({descricao: "Conta de Telefone", quantidade: 300, criadoEm: 49855 }));

store.dispatch(setTextFilter("Conta"));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));