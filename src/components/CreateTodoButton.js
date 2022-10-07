import React from "react";
import './CreateTodoButton.css';

function CreatTodoButton () {

    const onClickButton = () => {
        alert("hola")
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}    
        >+</button>
    );
}

export {CreatTodoButton};