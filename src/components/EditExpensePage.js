import React from 'react';

const EditExpensePage = (props) => {
    //Pegar ID
    console.log(props.match.params.id);
    
    return (
        <div>
            <p>Edit</p>
        </div>
    )
}

export default EditExpensePage;