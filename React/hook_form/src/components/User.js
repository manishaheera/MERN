import React, {useState} from 'react';

const User = (props) =>{

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
    }

    return(
        <form onSubmit = {createUser}>

            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <label>Password: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>

            <input type="submit" value="Create User" />

        </form>
    )

}

export default User