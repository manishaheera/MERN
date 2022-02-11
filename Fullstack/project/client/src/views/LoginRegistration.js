import React, {useState, useEffect} from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";

const LoginRegistration = (props) => {

    return(
        <div>

            <h1> Compose </h1>
            <Registration/>
            <Login />

        </div>
    )

}

export default LoginRegistration;