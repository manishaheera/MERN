const Display = (props) => {

    const {toDoList, setToDoList} = props;

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((item, index) => index !== taskId))
    }

    return(
        <div>

            <h1> To-Do List </h1> 
            {
                toDoList.map((item,index)=>(
                    <div key={index}>
                        <p>{index+ 1} {item.task} </p>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Display;