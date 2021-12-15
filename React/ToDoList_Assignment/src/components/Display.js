import React, {useState} from 'react';

const Display = (props) => {

    const {toDoList, setToDoList, toggle, setToggle} = props;

    const deleteTask = (taskId) => {
        setToDoList(toDoList.filter((item, index) => index !== taskId))
    }

    const checkboxHandler = (itemId) => {
        const newList = toDoList.map((item,index) => {
            if (itemId === index) {
                const newList = {...toDoList, 
                    task : item.task,
                    toggle: !item.toggle}
                return newList
            }
        })
        setToDoList(newList)
        }

    return(
        <div>

            <h1> To-Do List </h1> 

            {
                toDoList.map((item,index)=>(
                    <div key={index}>  

                        <span>
                            { item.toggle? 
                                (<p className="completedTask">  {index + 1}: {item.task} </p>) 
                                :
                                (<p className="incompleteTask"> {index + 1}:  {item.task} </p>)
                            }
                        </span>

                        <input type="checkbox" checked={item.toggle} onChange={(e)=>{checkboxHandler(index)}}/>
                        <button onClick={(e)=>deleteTask(index)}>Delete</button>
                        
                    </div>
                ))
            }
    
        </div>
    )
}

export default Display;