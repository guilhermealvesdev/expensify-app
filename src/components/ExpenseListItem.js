import React from 'react';

const ExpenseListItem = ({descricao, quantidade, criadoEm}) => (
    <div>
        <h3>{descricao}</h3>
        <p>Valor: {quantidade}</p>
        <p>Criado em: {criadoEm}</p>
    </div>
)
 
export default ExpenseListItem;