import React, {useState} from "react";
import './App.css';
import Form from './components/Form'
import Display from './components/Display'

function App() {

    const [box, setBox] = useState([]);
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("35");
    const [width, setWidth] = useState("35");

  return (
    <div className="App">
    
    <Form 
    box = {box} setBox = {setBox}
    color = {color} setColor = {setColor}
    height = {height} setHeight = {setHeight}
    width = {width} setWidth = {setWidth}
    />

    <Display
    box = {box} setBox = {setBox}
    />

    </div>
  );
}

export default App;
