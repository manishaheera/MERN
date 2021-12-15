const Display = (props) => {

    const {toDoList, setToDoList} = props;

    return(
        <div>

            <h1> Tasks </h1> 
            {
                toDoList.map((item,index)=>(
                    <div key={index}>
                        <p>{item.task}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Display;