import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, heroname } = this.props;
        // const {sate1,state2} = this.state;

        return <h1>Welcome {name}  and {heroname}</h1>
    }
}

export default Welcome;