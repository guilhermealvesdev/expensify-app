import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <p>404! - <Link to="/">Voltar para a home</Link></p>
        </div>
    )
}

export default NotFound;