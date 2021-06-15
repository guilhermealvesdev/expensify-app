import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = ({dispatch, id, descricao, quantidade, criadoEm}) => (
    <div>
        <h3>{descricao}</h3>
        <p>Valor: {quantidade}</p>
        <p>Criado em: {criadoEm}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remover</button>
    </div>
)
 
export default connect()(ExpenseListItem);