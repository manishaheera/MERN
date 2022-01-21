import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";

const EditAuthor = (props) =>{

    const {id} = props;

    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setName(res.data.name);
        })
        .catch((err) => {
            console.log(err);
            navigate("/authors/error")
        })
    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/authors/${id}`, {
                name,
            })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
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
            <h1> Edit Current Author</h1>

            <form onSubmit={updateAuthor}>

                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }

                    <label> Author Name </label>
                    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} /> <br></br>

                    <input type="submit" value="Update" className="submitButton"/>
                    <button onClick={()=> navigate("/")} className="submitButton"> Cancel </button>

            </form>
            <Link to={"/"} className="home"> Home </Link>
        </div>
    )
}

export default EditAuthor;

