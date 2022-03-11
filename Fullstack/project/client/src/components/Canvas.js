import React,{useRef, useEffect, useState} from "react";
import axios from "axios";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { SliderPicker } from 'react-color';
import {navigate} from "@reach/router";
import "../styles/Canvas.css";


const Canvas = (props) => {

    const [user, setUser] = useState("");
    const [colorSwatch, setColorSwatch] = useState("#ff0000");
    const [doodleList, setDoodleList] = useState([])
    const thisCanvas = useRef(null); 
    
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

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {}, // As a post request, we MUST send something with our request.
                // Because we're not adding anything, we can send a simple MT object 
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
    };
    
return (

    <div className="canvas-container"> 

        <img src={require('../images/spiral.png')} alt="spiral" className="spiral-bound" />

        <header2>
            <h7> Doodle</h7> 

            {/* <div className="welcome-message"> 
                Welcome, {user.username} 
            </div> */}

            <button className="header" onClick={()=> navigate("/compose/dashboard")}> Dashboard </button>
            <button className="header" onClick={()=> navigate("/compose/dashboard")}> Gallery </button>
            <button className="header" onClick ={logout}> Logout </button>

            <img src={require('../images/doodle.png')} alt="bears-doodle" className="bears-doodle" />
        </header2> 

        <div className="doodle-controller">

            <button className="controls" onClick={() => {thisCanvas.current.eraseMode(false);}}>
                Pen
            </button>

            <button className="controls" onClick={() => {thisCanvas.current.eraseMode(true);}}>
                Erase
            </button>

            <button className="controls" onClick={() => {thisCanvas.current.undo();}}>
                Undo
            </button>

            <button className="controls" onClick={() => {thisCanvas.current.redo();}}>
                Redo
            </button>

            <button className="controls" onClick={() => {thisCanvas.current.resetCanvas();}}>
                Reset
            </button>

            <button className="controls" onClick={() => 
            {/* // thisCanvas.current.
            //     exportImage("png")
            //         .then((data) => {
            //             console.log(data);
            //             console.log("blahahsahsha")
            //             setDoodleList(data);
            //         })
            //         .catch((err) => {
            //             console.log(err);
            //         });
            //     } */
                thisCanvas.current.exportPaths();}
            }
            >
                Save
            </button> 

        </div><br></br>

        <SliderPicker
            color= {colorSwatch}
            onChangeComplete= {(color)=> {setColorSwatch(color.hex)}}
        /> <br></br>

        <div className="doodle">
            <ReactSketchCanvas
                ref= {thisCanvas}
                style= {styles}
                width= "100%"
                height= "800px"
                strokeWidth= {4}
                strokeColor= {colorSwatch}
                canvasColor= "#312B2A"
            />
        </div>

    </div>
)
}

export default Canvas;