import React from "react";
import './TodoSearch.css';

function TodoSearch () {

    // escuchar los cambios en el iput
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
    }


    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebolla"
            onChange={onSearchValueChange}
        />
    );

}

export {TodoSearch};