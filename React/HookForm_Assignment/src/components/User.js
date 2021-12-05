import React, {useState} from 'react';

const User = (props) => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    return(
        <div>
        <form>

            <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setlastName(e.target.value) } />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>

        </form>

        <h1> * Your Form Data * </h1>

        <h3>First Name:</h3>  {firstName}
        <h3>Last Name:</h3> {lastName}
        <h3>Email:</h3> {email}
        <h3>Password:</h3> {password}
        <h3>Confirm Password:</h3> {confirmPassword}

        </div>
    )
};

export default User