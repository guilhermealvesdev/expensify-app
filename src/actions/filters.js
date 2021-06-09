// SET_TEXT_FILTER
export const setTextFilter = (texto = "") => {
    return {
        type:"SET_TEXT_FILTER",
        texto
    }
}
// SORT_BY_DATE
export const sortByDate = () => {
    return {
        type: "SORT_BY_DATE"
    }
}
// SORT_BY_AMOUNT
export const sortByAmount = () => {
    return {
        type:"SORT_BY_AMOUNT"
    }
}
// SET_START_DATE
export const setStartDate = (dataInicio = undefined) => {
    return {
        type:"SET_START_DATE",
        dataInicio
    }
}

// SET_END_DATE
export const setEndDate = (dataFim = undefined) => {
    return {
        type:"SET_END_DATE",
        dataFim
    }
}