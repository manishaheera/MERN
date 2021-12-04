import React, {useState} from 'react';

const Person = (props) =>{

    const {firstName, lastName, age, hairColor} = props;

    const [currentAge, setcurrentAge] = useState(age);

    const increaseAge = (e) =>{
        setcurrentAge(currentAge + 1);
    }

    return(
        <div>
            
            <span>{lastName} {firstName}</span>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={(e)=>increaseAge()}> Increase My Age</button>
        </div>
    )
}

export default Person