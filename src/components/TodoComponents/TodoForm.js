import React from 'react'

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
            <button>Submit</button>
            <button>Clear</button>
        </form>
    )
}

export default TodoForm; 