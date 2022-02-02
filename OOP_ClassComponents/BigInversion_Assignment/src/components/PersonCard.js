import react, {Component} from "react";

class PersonCard extends Component {


    render(){
        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div>
                <h3> {lastName}, {firstName} </h3>
                <p> {age} </p>
                <p> {hairColor} </p>
            </div>
        )
    }
}

export default PersonCard;