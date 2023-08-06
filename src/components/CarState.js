import React from "react";

class CarState extends React.Component {
    constructor() {
        super();
        this.state = {color:'Blue', model:"Lambo"}
    }

    render() {
        return <>
            <h1>My car is { this.state.color } and Model is {this.state.model}</h1>
            <button onClick={() => { this.setState(previousState => {return {...previousState,color:"Black"}})}}>Change Color</button>
            </>
    }
}

export default CarState;