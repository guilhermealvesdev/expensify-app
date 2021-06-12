import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'


const ExpenseList = (props) => {
    return (
        <div>
            <h2>Lista de despesas</h2>
            {props.expenses.map((item, index) => (
                <ExpenseListItem {...item} key={item.id} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
         /*
            Passamos a chamada da função getVisibleExpenses para pegarmos os dados
            já filtrados e passar para o componente da Lista. Se chamarmos state.expenses e state.filters direto,
            pegaremos todo o conteúdo da array, sem as filtragens.
        */
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
 
export default ConnectedExpenseList;