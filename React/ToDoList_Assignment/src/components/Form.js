import React, {useState} from 'react';

const Form = (props) => {
    const [task, setTask] = useState("");
    // const [toggle, setToggle] = useState(false);

    const {toDoList, setToDoList} = props;

    const submitNewTask = (e) => {
        e.preventDefault(e);

        setToDoList([...toDoList, 
        {
            task: task,
            toggle: false, 
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

