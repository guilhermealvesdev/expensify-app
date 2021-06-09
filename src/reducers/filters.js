//State padrão do Reducer.
const filtersReducerDefaultState = {
    text: '',
    filtrarPor: '',
    dataInicio: undefined,
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
                filtrarPor: 'quantidade'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                filtrarPor: 'data'
            }
        case "SET_START_DATE":
            return {
                ...state,
                dataInicio: action.dataInicio
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

export default filtersReducer;