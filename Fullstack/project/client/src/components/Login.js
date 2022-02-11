import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const login = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/login", {
            email: email,
            password: password,
            },
            {
                // forces sending of the credentials/cookies so they can be updated
                // XMLHttpRequest from a different domain cannot set cookie values for their own domain
                // unless withCredentials is set to true before making the request
                withCredentials: true,
            },
        )
        .then((res) => {
            console.log(res, "res");
            console.log(res.data, "is res data!")
            // Another way to send our userId forward without more advanced state manage is via local storage!
            // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            // localStorage will allow us to store this current user's id in storage. This way, we can use it on a button for the current user to get to their profile page.
            // localStorage.setItem("userId", res.data.userId);
            // Utilizing navigate's second arrgument to pass our userId forward
            //Documentation: https://reach.tech/router/api/navigate
            navigate("/compose/dashboard")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.message)
        })
    }

    return(
        <div>
            <h2> Login </h2>

            <form onSubmit={login}>

                <div>
                    <label> Email </label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button> Sign In </button>

            </form>

        </div>
    )

}

export default Login;