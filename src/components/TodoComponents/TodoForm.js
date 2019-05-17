import React from 'react'
import './Todo.css'
const TodoForm  = props => {
    

    return(
        <form>
             <input
                onChange={props.changeHandler}
                type="text"
                value={props.task}
                placeholder="task"
                name="task"
             />
             <div className='buttons'>
                <button onClick={props.submit}>Add Task</button>
                <button onClick={props.clear}>Clear Complete</button>
             </div>
        </form>
    )
}

export default TodoForm; 