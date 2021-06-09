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

export default expensesReducer;