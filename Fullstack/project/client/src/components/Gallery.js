import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate} from "@reach/router";
import { MdDeleteForever } from "react-icons/md";
import "../styles/Gallery.css";


const Gallery = (props) => {

    const [doodles, setDoodles] = useState([]);
    const [user, setUser] = useState("");

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/drawings/${user.username}`,
            { withCredentials:true })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setDoodles(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const deleteDrawing = (doodleId) => {
        axios.delete(`http://localhost:8000/api/drawings/${doodleId}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setDoodles(doodles.filter((doodle, index)=>doodle._id !== doodleId))
        })
        .catch((err)=> console.log(err))
    }

    return(

        <div className="gallery">
        
        <img src={require('../images/spiral.png')} alt="spiral" className="spiral-bound" />

        <header2>
            <h7> Doodle</h7> 

            {/* <div className="welcome-message"> 
                Welcome, {user.username} 
            </div> */}

            <button className="header" onClick={()=> navigate("/compose/dashboard")}> Dashboard </button>
            <button className="header" onClick={()=> navigate("/compose/dashboard")}> Gallery </button>
            {/* <button className="header" onClick ={logout}> Logout </button> */}

            <img src={require('../images/doodle.png')} alt="bears-doodle" className="bears-doodle" />
        </header2> 

        <div className="drawing-list" >

        {
                doodles.map((doodle,index)=> (

                    <div key={doodle._id} className="drawing">

                    <img className="image" src = {doodle.image} />

                        <div className= "note-footer">
                                {doodle.date} <br></br>
                                <MdDeleteForever className="delete-icon" onClick={()=> deleteDrawing(doodle._id)}/>
                        </div>

                    </div>
                    
                ))
            }
            </div>

        </div>
    )
}

export default Gallery;