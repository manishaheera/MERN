import React, {useState, useEffect} from "react";
import axios from "axios";
import Note from "../components/Note";
import AddNote from "./AddNote";
import SearchBox from "./SearchBox";
import { Link, navigate} from '@reach/router';


const Dashboard = (props) => {

    const [noteList, setNoteList] = useState([]);


    return(
        <div className="dashboard">

            <div className="notes-container" >

                <header>
                    <h7>
                        Notes
                    </h7>

                        <div className="links" >
                        <Link to={`/`}> Doodling |</Link>
                        <Link to={`/`}> Cubby |</Link>
                        <Link to={`/`}> Logout </Link>
                        </div>
                    

                    <img src={require('../images/dashboard.png')} alt="bears-dashboard" className="bears-dash" />


                </header>

                <SearchBox />

                    
                <Note
                    noteList= {noteList} 
                    setNoteList = {setNoteList}
                />

            </div>

        </div>

    )
}


export default Dashboard;