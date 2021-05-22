import React from 'react';

const PortfolioItem = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            <h1>Uma coisa que eu fiz:</h1>
            <p>Esta é a página com o id de {id}</p>
        </div>
    )
}

export default PortfolioItem;