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

    const deleteAuthor = (mapId)=> {
        axios.delete(`http://localhost:8000/api/authors/${mapId}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setAuthorList(authorList.filter((author, index)=>author._id !== mapId))
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div className="wrapper">

            <h1> Favorite Authors &hearts; </h1>

            <Link to={"/authors/new"} className="addNew"> Add Author </Link>
            
            <table>

                <thead>
                    <tr>
                        <th> Author Name</th>
                        <th> Actions </th>
                    </tr>
                </thead>

                <tbody>

                    {
                    authorList.map((author, index)=> (
                        <tr key={author._id} className ="author">

                            <td>
                                <span>{index + 1}:</span> 
                                {author.name} 
                            </td>
                        
                            <td>
                                <button onClick={()=> navigate(`/authors/edit/${author._id}`)}> Edit </button>
                                <button onClick={()=> deleteAuthor(author._id)} > Delete </button>
                            </td>

                        </tr>
                    ))
                    }

                </tbody>

            </table>

        </div>
    )
}

export default DisplayAllAuthors;