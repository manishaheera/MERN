import React, {useState} from 'react';

const Display = (props) => {

    const {toDoList, setToDoList} = props;

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((item, index) => index !== taskId))
    }

    // const checkboxHandler = (itemId) => {
    //     let newList = toDoList.map((item,index) => {
    //         if (itemId === item.task) {
    //             let newList = {...item}
    //             newList.toggle = !item.toggle
    //             return newList
    //         }
    //         return item 
    //     })
    //     setToDoList(newList)
    //     }

    const checkboxHandler = (task) => {
        task.toggle = !task.toggle
        setToDoList([...toDoList])
        }

    return(
        <div>

            <h1> To-Do List </h1> 

            {
                toDoList.map((item,index)=>(
                    <div key={index}>  

                        <span>
                            { item.toggle? 
                                (<p className="completedTask">  ({index}) {item.task} </p>) 
                                :
                                (<p className="incompleteTask"> ({index})  {item.task} </p>)
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