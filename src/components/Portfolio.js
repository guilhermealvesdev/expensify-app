import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            <h1>Meu trabalho</h1>
            <p>Aqui é meu portfolio. Tenho algumas coisas que eu fiz:</p>

            <Link to="/portfolio/1">Item 1</Link>
            <Link to="/portfolio/2">Item 2</Link>
        </div>
    )
}

export default Portfolio;