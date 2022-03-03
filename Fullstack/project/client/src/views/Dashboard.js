import React, {useState, useEffect} from "react";
import axios from "axios";
import Note from "../components/Note";
import SearchBox from "../components/SearchBox";
import {Link, navigate} from '@reach/router';
import "../styles/Note.css";


const Dashboard = (props) => {

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

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {}, // As a post request, we MUST send something with our request.
                // Because we're not adding anything, we can send a simple MT object 
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className="dashboard">

            <div className="notes-container" >

                <header>

                    <h7>
                        Notes
                    </h7>
                    

                    <div className="links" > 

                        Welcome, {user.username} <br></br>

                        <button className="logout-button"> Doodle Time! </button>
                        <button onClick ={logout} className="logout-button"> Logout </button>

                    </div>
                    

                    <img src={require('../images/dashboard.png')} alt="bears-dashboard" className="bears-dash" />


                </header>

                <SearchBox 
                handleSearchNote = {setSearch}
                />

                <Note
                    user= {user}
                    setUser= {setUser}
                />

            </div>
            
        </div>

    )
}


export default Dashboard;