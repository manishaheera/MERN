import react, {Component} from "react";

class PersonCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            increaseAge: this.props.age
        }
    }


    render(){
        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div>
                <h3> {lastName}, {firstName} </h3>
                <p> {this.state.increaseAge} </p>
                <p> {hairColor} </p>
                <button onClick={() => this.setState({ increaseAge: this.state.increaseAge + 1})}> Birthday Button</button>
            </div>
        )
    }
}

export default PersonCard;