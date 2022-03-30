import React from "react";
import '../css/TodoCounter.css';

const styles = {
    color: 'red',
    backgroundColor: 'yellow',
}


function TodoCounter() {
    return (
        <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter };
