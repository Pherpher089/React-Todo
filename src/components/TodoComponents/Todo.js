import React from 'react';
import "./Todo.css";

const Todo = props => {
    let classNames = 'todo';

    if(props.todo.complete){
        console.log(props.todo.task + ": " + props.todo.complete)
        classNames += " complete"
    }

    function updateComplete() {
        console.log('Am Clicked')
        props.completeTodo(props.todo.id);
    }

    return (
        <div className={classNames} onClick={updateComplete}>
            <div>{props.todo.task}</div>
        </div>
    );
}

export default Todo;