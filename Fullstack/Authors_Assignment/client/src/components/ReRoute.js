import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";

const ReRoute = (props) => {


    return(
        <div className="wrapper"> 

            <h1> Error </h1>  
            <Link to={"/"} className="addNew"> Home </Link>

            <p> The author you're looking for does not exist. If you would like to add an author please use the create author form:
                <Link to={"/new"}>  Create Author  </Link>
            </p>

        </div>
    )
}

export default ReRoute;

