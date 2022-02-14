import React, {useState, useEffect} from "react";
import axios from "axios";


const AddNote = (props) => {

    const {noteList, setNoteList} = props;
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [errors, setErrors] = useState("");

    const characterCountLimit = 255;


    const createNote = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/notes", {
                title: noteTitle,
                content: noteContent,
            },
            {
                // forces sending of the credentials/cookies so they can be updated
                // XMLHttpRequest from a different domain cannot set cookie values for their own domain
                // unless withCredentials is set to true before making the request
                withCredentials: true,
            },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setNoteTitle("");
                setNoteContent("");
                setErrors("");
                setNoteList([...noteList, res.data])
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return(

        
        <form onSubmit={createNote} >

            <div className="note new">

                <p>
                    {
                        errors.title?
                        <p>{errors.title.message}</p>
                        :null
                    }
                </p>

                <p>
                    {
                        errors.content?
                        <p>{errors.content.message}</p>
                        :null
                    }
                </p>
            
                    <textarea type="text" name="noteTitle" placeholder="title" value={noteTitle} onChange={(e)=> setNoteTitle(e.target.value)} /> 
                    <textarea   rows="8" cols="10" type="text" name="noteContent" placeholder="type to add a new note..." value={noteContent} onChange={(e)=> setNoteContent(e.target.value)} /> 


                    <div className="note-footer">

                            <small> {characterCountLimit - noteContent.length} </small>
                            <button className="save"> Save &hearts; </button>
                                
                    </div>

            </div>

            </form>

    )
}

export default AddNote;