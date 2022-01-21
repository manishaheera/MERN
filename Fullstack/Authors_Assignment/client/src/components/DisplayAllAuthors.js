import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, navigate} from "@reach/router";

const DisplayAllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])

    const deleteAuthor = (id)=> {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setAuthorList(authorList.filter((author, index)=>author._id !== id))
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div className="wrapper">

            <h1> Favorite Authors </h1>

            <Link to={"/authors/new"} className="addNew"> Add Author </Link>
            

                {
                authorList.map((author, index)=> (
                    <div key={author._id} className ="author">

                        <span>{index + 1}: </span> <Link to={`/authors/${author._id}`} className="link"> {author.name} </Link> <br></br>
                    
                        <button onClick={()=> navigate(`/authors/edit/${author._id}`)}> Edit </button>
                        <button onClick={()=> deleteAuthor(author._id)} > Delete</button>
                    </div>
                ))
                }
                
        </div>
    )
}

export default DisplayAllAuthors;