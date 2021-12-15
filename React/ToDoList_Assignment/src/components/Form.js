import React, {useState} from 'react';

const Form = (props) => {

    const {toDoList, setToDoList, task, setTask, toggle, setToggle} = props;

    const submitNewTask = (e) => {
        e.preventDefault(e);

        setToDoList([...toDoList, 
        {
            task: task,
            toggle: toggle, 
        }
    ])
    setTask("");
    }

    return(
        <div>

            <form onSubmit = {submitNewTask}>

                <label>Add Task </label> 
                <input type="text" name="task"  value={task} onChange={(e)=> setTask(e.target.value)} />
                <input type="submit" value="submit"/>

            </form>

        </div>
    )
}


export default Form;

