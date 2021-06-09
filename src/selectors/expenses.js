/*
    Pegando despesas visíveis após o filtro.
    PARÂMETROS: A array de despesas (expenses) e o objeto com os filtros, já destruturados.
*/

const getVisibleExpenses = (expenses, {text, filtrarPor, dataInicio, dataFim}) => {
    return expenses.filter((item) => {
        /*
            Aqui checamos se o valor de dataInicio (que vem do filtro) não é um número.
            Se não for (caso seja undefined, por exemplo, e se o usuário não quiser filtrar por dataInicio), virará TRUE,
            e o filtro não atingirá essa propriedade.

            Caso SEJA um número, o typeof retornará FALSE e irá pra outra condição (que é OU), e verificará se a propriedade
            dataInicio da despesa for MAIOR que o passado no filtro. Se for, acabará retornando TRUE, e poderá ser mostrado.
            Caso não seja, retornará FALSE, e o filtro removerá essa despesa.
        */
        const dataInicioMatch = typeof dataInicio !== 'number' || item.criadoEm >= dataInicio;

        /*O mesmo vale pro dataFim, só que verifica se o dataFim da despesa é MENOR do que o do filtro.*/
        const dataFimMatch = typeof dataFim !== 'number'|| item.criadoEm <= dataFim;

        /*Aqui verificamos se o texto passado existe (includes) dentro da string da despesa atual.*/
        const textMatch = typeof text !== 'string' || item.descricao.toLowerCase().includes(text.toLowerCase());
        
        return dataInicioMatch && dataFimMatch && textMatch;
    }).sort((a, b) => {
        if (filtrarPor === 'data'){
            return a.criadoEm < b.criadoEm ? 1 : -1;
        } else if (filtrarPor === 'quantidade') {
            return a.quantidade < b.quantidade ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;