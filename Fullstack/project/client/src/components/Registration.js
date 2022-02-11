import React, {useState, useEffect} from "react";
import axios from "axios";

const Registration = (props) => {

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState("");

    //Single state of data to hold all data
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            setUser({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setConfirmReg(
                "Thank you for registering, you can now log in!",
            );
            setErrors("");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>

            <h2> Register </h2>

            {
                confirmReg?
                <h6> {confirmReg} </h6>
                : null
            }

            {
                errors.username? 
                    <p>{errors.username.message}</p>
                :null
            }

            {
                errors.email? 
                    <p>{errors.email.message}</p>
                :null
            }

            {
                errors.password? 
                    <p>{errors.password.message}</p>
                :null
            }

            {
                errors.confirmPassword? 
                    <p>{errors.confirmPassword.message}</p>
                :null
            }   
            
            <form onSubmit={register}>

                <div>
                    <label> Username </label>
                    <input type="text" name="username" value={user.username} onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label> Email </label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </div>

                <div>
                    <label> Confirm Password </label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
                </div>

                <button> Register </button>


            </form>

        </div>
    )

}

export default Registration;


