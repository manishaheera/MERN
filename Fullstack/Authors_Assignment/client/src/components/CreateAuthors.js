import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";

const CreateAuthors = (props) => {


    const [authorList, setAuthorList] = useState([]);
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
                setAuthorList([...authorList, res.data])
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
                
            </form>

            <Link to={"/"} className="link"> Back to Authors List </Link>

        </div>
    )
}

export default CreateAuthors;