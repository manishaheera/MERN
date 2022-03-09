import React,{useRef,useContext, useEffect, useState} from "react";
import axios from "axios";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import {link, navigate} from "@reach/router";
import "../styles/Canvas.css";


const Canvas = (props) => {

    const [user, setUser] = useState("");
    const [drawingMode, setDrawingMode] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/secure",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
    };

    const thisCanvas = useRef(null)

return (
    <div className="canvas-container"> 
    <img src={require('../images/spiral.png')} alt="spiral" className="spiral-bound" />

    <header2>
        <h7> Doodle</h7> <br></br>
        <button onClick={()=> navigate("/compose/dashboard")}> Dashboard </button>
        {/* <button> Locker </button> */}
        <button> Logout </button>
        <img src={require('../images/doodle.png')} alt="bears-doodle" className="bears-doodle" />
    </header2> 

    <div className="doodle-controller">
        <button onClick={(e)=> setDrawingMode(false)}> Erase </button>
        <button> Draw </button>
        <button onClick={(e)=> window.location.reload()}> Clear </button>
    </div>

        <div className="doodle">
            <ReactSketchCanvas
                ref = {thisCanvas}
                style={styles}
                width="100%"
                height="900px"
                strokeWidth={5}
                strokeColor={ "#" + Math.floor(Math.random() * 12283445).toString(16)} 
                // strokeColor="white"
                canvasColor="#312B2A"
                drawMode ={drawingMode}
            />

        </div>
    </div>
)

}


export default Canvas;