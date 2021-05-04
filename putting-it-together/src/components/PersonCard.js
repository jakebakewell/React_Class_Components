import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            birthAge: props.age
        }
    }

    birthday = () => {
        this.setState({birthAge: this.state.birthAge + 1})
    }
    
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h3>{lastName}, {firstName}</h3>
                <p>Age: {this.state.birthAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;