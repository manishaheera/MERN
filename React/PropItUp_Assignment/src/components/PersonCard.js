import React from 'react';

const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props
    return (
        <div className = "Person">
            <span> {lastName}, {firstName} </span>
            <p> Age : {age} </p>
            <p> Hair Color: {hairColor} </p>
        </div>
    )
}

export default PersonCard;