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
                <button onClick={props.submit}>Submit</button>
                <button onClick={props.clear}>Clear</button>
             </div>
        </form>
    )
}

export default TodoForm; 