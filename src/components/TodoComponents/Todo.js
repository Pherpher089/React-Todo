import React from 'react';

const Todo = props => {
    return (
        <div>
            <div>{props.todo.task}</div>
        </div>
    );
}

export default Todo;