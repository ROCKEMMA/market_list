import React from "react";
import './TodoList.css';

function TodoList (props){
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );

}

export {TodoList};