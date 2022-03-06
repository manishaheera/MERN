import React,{ useContext, useEffect, useState} from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import {link, navigate} from "@reach/router";
import "../styles/Canvas.css";


const Canvas = (props) => {

    

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
    };

return (
    <div className="canvas-container"> 
    <img src={require('../images/spiral.png')} alt="spiral" className="spiral-bound" />

    <header2>
        <h7> DoodleTime</h7> <br></br>
        <button> Dashboard </button>
        <button> Logout </button>
        <img src={require('../images/doodle.png')} alt="bears-doodle" className="bears-doodle" />
    </header2> 

        <div className="doodle">
            <ReactSketchCanvas
                style={styles}
                width="100%"
                height="900px"
                strokeWidth={5}
                strokeColor="black"
                backgroundColor="black"
            />
        </div>
    </div>
)

}


export default Canvas;