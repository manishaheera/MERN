const Display = (props) => {

    const {toDoList, setToDoList, task, setTask} = props;

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((item,index) => item.id !== taskId))
    }

    return(
        <div>

            <h1> To-Do List </h1> 
            {
                toDoList.map((item,index)=>(
                    <div key={index}>
                        <p>{index + 1} {item.task} 
                        <input type="checkbox" checked={item.completed}/></p> 
                        <button onClick={(e) => deleteTask(item.id)}>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Display;