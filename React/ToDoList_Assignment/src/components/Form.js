const Form = (props) => {

    const {toDoList, setToDoList, task, setTask} = props;
    

    const submitNewTask = (e) => {
        e.preventDefault(e);

        setToDoList([...toDoList, 
        {
            task: task,
        }
    ])
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

