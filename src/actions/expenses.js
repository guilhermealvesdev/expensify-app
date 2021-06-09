import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({descricao = "", nota = "", quantidade = 0, criadoEm = 0} = {}) => {
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
export const removeExpense = ({id}) => {    
    return {
        type:'REMOVE_EXPENSE',
        id
    }
}

// EDIT_EXPENSE
export const editExpense = (id, mudancas) => {
    return {
        type:'EDIT_EXPENSE',
        id,
        mudancas
    }
}