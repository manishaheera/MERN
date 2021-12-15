import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Display from './components/Display'

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">

      <Form
      toDoList= {toDoList} setToDoList= {setToDoList}
      task= {task} setTask= {setTask}
      toggle= {toggle} setToggle= {setToggle}
      />

      <Display
      toDoList= {toDoList} setToDoList = {setToDoList}
      toggle={toggle} setToggle= {setToggle}
      />
      
    </div>
  );
}

export default App;
