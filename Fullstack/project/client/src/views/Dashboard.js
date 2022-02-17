import React, {useState, useEffect} from "react";
import axios from "axios";
import Note from "../components/Note";
import SearchBox from "../components/SearchBox";
import { Link, navigate} from '@reach/router';


const Dashboard = (props) => {

    const [noteList, setNoteList] = useState([]);
    const [user, setUser] = useState({});
    const [search, setSearch] = useState("");

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


    return(
        <div className="dashboard">

            <div className="notes-container" >

                <header>
                    <h7>
                    Notes
                    </h7>
                    

                        <div className="links" > 

                        Welcome, {user.username} <br></br>

                        {/* <Link to={`/`}> Doodling </Link>
                        <Link to={`/`}> Cubby </Link>
                        <Link to={`/`}> Logout </Link> */}
                        </div>
                    

                    <img src={require('../images/dashboard.png')} alt="bears-dashboard" className="bears-dash" />


                </header>

                <SearchBox 
                handleSearchNote = {setSearch}
                />

                    
                <Note
                    user = {user}
                    setUser = {setUser}
                    noteList= {noteList} 
                    setNoteList = {setNoteList}
                />

            </div>
            
        </div>

    )
}


export default Dashboard;