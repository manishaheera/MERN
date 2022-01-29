import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";
import NavOne from "./NavOne";

const AddPlayer = (props) => {

    const [name, setName] = useState(""); 
    const [preferredPosition, setPreferredPosition] = useState(""); 
    const [errors, setErrors] = useState("");
    const {listPageIsActive,setListPageIsActive,setManagePlayerStatusTabIsActive,} = props;

        useEffect(() => {
            setListPageIsActive(false);
            setManagePlayerStatusTabIsActive(false);
        });

    const submitPlayer= (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/players", {
                name,
                preferredPosition,
            })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setName("");
                setPreferredPosition("");
                setErrors("");
                navigate("/")
            })
            .catch((err)=> {
                console.log(err);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors)
            });
    }


    return(

        <div className="wrapper">
        
            <div className="player-box">

                <NavOne
                    listPageIsActive={listPageIsActive}
                    setListPageIsActive={setListPageIsActive}
                />

                <h2> Add Player </h2>

                <form onSubmit={submitPlayer}>

                    {
                        errors.name?
                        <p>{errors.name.message}</p>
                        :null
                    }

                    <label> Player Name: </label>
                    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} /> <br></br>

                    <label> Preferred Position: </label>
                    <input type="text" name="name" value={preferredPosition} onChange={(e)=> setPreferredPosition(e.target.value)} /> <br></br>

                    <button> Add </button>
                    
                </form>

            </div>

        </div>
    )
}

export default AddPlayer;