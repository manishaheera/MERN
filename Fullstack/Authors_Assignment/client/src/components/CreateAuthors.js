import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";

const CreateAuthors = (props) => {


    // const [authorList, setAuthorList] = useState([]); // don't need state since the authorlist is not being displayed on this component! not lifted state
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState("");

    const submitAuthor= (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/authors", {
                name,
            })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                // setAuthorList([...authorList, res.data])
                setName("");
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

            <h1>Add Author</h1>

            <form onSubmit={submitAuthor}>

                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }

                <label> Author Name </label>
                <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} /> <br></br>

                <input type="submit" value="Submit" className="submitButton"/>
                <button onClick={()=> navigate("/")} className="submitButton"> Cancel </button>
                
            </form>

            <Link to={"/"} className="home"> Home </Link>

        </div>
    )
}

export default CreateAuthors;