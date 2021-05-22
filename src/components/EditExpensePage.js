import React from 'react';

const EditExpensePage = (props) => {
    //Pegar ID
    const id = props.match.params.id;
    
    return (
        <div>
            <p>Edit {id}</p>
        </div>
    )
}

export default EditExpensePage;