// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo.js';

const TodoList = props =>{
    return(
        <div>
            <div className = 'TodoList'>
            {props.todoList.map(todo =>(
                <Todo todo = {todo} />))}
            </div>
        </div>
    );
}

export default TodoList;