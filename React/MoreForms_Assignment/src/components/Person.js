import React, {useState} from 'react';

const Person = (props) =>{

    const [personList, setPersonList] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault(e);

        setPersonList([...personList,
        {
            firstName: firstName,
            lastName : lastName,
            email : email,
            password : password,
        }
    ])
    }

    return(
        <div>

        <h1> Person </h1>
        <form onSubmit ={submitHandler}>

            <div>
                <p>{
                    firstName.length > 0 && firstName.length < 2 ?
                    <span> Your first name must be atleast 2 characters </span>
                    :null
                }
                </p>
                <label>First Name: </label> 
                <input type="text" name="firstName" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div>
                <p>{
                    lastName.length > 0 && lastName.length < 2 ?
                    <span> Your last name must be atleast 2 characters </span>
                    :null
                }</p>

                <label>Last Name: </label> 
                <input type="text" name="lastName"  value={lastName} onChange={ (e) => setlastName(e.target.value) } />
            </div>

            <div>
                <p>{
                    email.length > 0 && email.length < 2 ?
                    <span> Your email name must be atleast 2 characters </span>
                    :null
                }</p>
                <label>Email Address: </label> 
                <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div>
                <p>{
                    password.length > 0 && password.length < 8 ?
                    <span> Your password must be atleast 2 characters </span>
                    :null
                }</p>
                <label>Password: </label>
                <input type="password" name="password" value ={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <p>{
                    confirmPassword.length > 0 && confirmPassword !== password  ?
                    <span> Passwords must match </span>
                    :null
                    }</p>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>

            <input type="submit" value="Add Person" class="submit-button"/>

        </form>

        <p>{firstName} {lastName}</p>
        <p> {email} </p>
        <p> {password} </p>
        <p> {confirmPassword} </p>
        </div>
    )
}

export default Person;

