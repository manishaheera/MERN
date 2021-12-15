import React, {useState} from 'react';

const Display = (props) => {

    const {toDoList, setToDoList} = props;

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((item, index) => index !== taskId))
    }

    const checkboxHandler = (task) => {
        let newList = toDoList.map((item,index) => {
            if (task === item) {
                let updatedItem = {...item};
                updatedItem.toggle = !item.toggle
                return updatedItem
            }
            return item 
        })
        setToDoList(newList)
        }

    // const checkboxHandler = (task) => {
    //     task.toggle = !task.toggle
    //     setToDoList([...toDoList])
    //     }

    return(
        <div>

            <h1> To-Do List </h1> 

            {
                toDoList.map((item,index)=>(
                    <div key={index}>  

                        <span>
                            { item.toggle? 
                                (<p className="completedTask">  ({index + 1}) {item.task} </p>) 
                                :
                                (<p className="incompleteTask"> ({index + 1})  {item.task} </p>)
                            }
                        </span>

                        <input type="checkbox" onChange={(e)=>{checkboxHandler(item)}}/>
                        <button onClick={(e)=>deleteTask(index)}>Delete</button>
                        
                    </div>
                ))
            }
    
        </div>
    )
}

export default Display;