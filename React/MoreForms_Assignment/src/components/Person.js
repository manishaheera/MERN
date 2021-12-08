import React, {useState} from 'react';

const Person = (props) =>{

    const [personList, setPersonList] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const submitNewPerson = (e) =>{
        e.preventDefault(e);

        setPersonList([...personList,
        {
            firstName: firstName,
            lastName : lastName,
            email : email,
            password : password,
            confirmPassword : confirmPassword,
        }
        
    ])
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
    }

    return(
        <div>

        <h1> Form Validations </h1>

        <form onSubmit ={submitNewPerson}>
            <div>
                <p>{
                    firstName.length > 0 && firstName.length < 2 ?
                    <span> first name must be at least 2 characters </span>
                    :null
                }
                </p>
                <label>First Name: </label> 
                <input type="text" name="firstName" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div>
                <p>{
                    lastName.length > 0 && lastName.length < 2 ?
                    <span> last name must be at least 2 characters </span>
                    :null
                }</p>

                <label>Last Name: </label> 
                <input type="text" name="lastName"  value={lastName} onChange={ (e) => setlastName(e.target.value) } />
            </div>

            <div>
                <p>{
                    email.length > 0 && email.length < 5 ?
                    <span> email must be at least 5 characters </span>
                    :null
                }</p>
                <label>Email Address: </label> 
                <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div>
                <p>{
                    password.length > 0 && password.length < 8 ?
                    <span> password must be atleast 2 characters </span>
                    :null
                }</p>
                <label>Password: </label>
                <input type="password" name="password" value ={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <p>{
                    confirmPassword.length > 0 && confirmPassword !== password  ?
                    <span> passwords must match </span>
                    :null
                    }</p>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>

            <input type="submit" value="Submit" className="submit-button"/>
        </form>
        
        <h1 className="user-submission"> AFTER-SUBMISSION </h1>
        {
            personList.map((person,index)=>(
                <div className="person">
                    <p>Name: {person.firstName} {person.lastName}</p>
                    <p>Email: {person.email}</p>
                    <p>Password: {person.password}</p>
                </div>
            ))
        }

        <h1> REAL-TIME INPUT </h1>
        <p>Name: {firstName} {lastName}</p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmPassword} </p>
        </div>
    )
}

export default Person;

