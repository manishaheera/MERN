import React, {useState, useEffect} from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import AddNote from "./AddNote";


const Note = (props) => {

    const {noteList, setNoteList} = props;


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/notes/`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setNoteList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])

    const deleteNote = (noteId)=> {
        axios.delete(`http://localhost:8000/api/notes/${noteId}`)
        .then((res)=> { 
            console.log(res);
            console.log(res.data);
            setNoteList(noteList.filter((note, index)=>note._id !== noteId))
        })
        .catch((err)=> console.log(err))
    }

    return(
        <div className="notes-list">

            {
            noteList.map((note,index) => (
                <div key={note._id} className="note">

                    {note.title} &hearts; <br></br>
                    {note.content}

                    <div className= "note-footer">
                        {note.createdAt}
                        <MdDeleteForever ClassName="delete-icon" onClick={()=> deleteNote(note._id)}/>
                    </div>

                </div>
            ))
            }
            
            <AddNote
            noteList= {noteList} 
            setNoteList = {setNoteList}
            />

        </div>
    )
}

export default Note;