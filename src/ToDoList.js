import React from 'react';
import * as config from './config.json';
import './ToDoList.css';

export const ToDoList = () => {
    const [toDos, setToDos] = React.useState([]);

    React.useEffect(() => {
        fetch(config.toDoApi)
        .then(resp => resp.json())
        .then(data => setToDos(data));
    },[]);

    return(
        <div className="center">
            <h1>My TODO List</h1>
            {toDos.map(todo => {
                return <li key={todo.id}>{todo.description}</li>
            })}
        </div>
    );
};

export default ToDoList;