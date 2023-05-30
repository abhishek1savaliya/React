import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Krishna</div>

        // return (
        //     this.state.isLoggedIn ? <div>Welcome Krishna</div> : <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Krishna</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome Krishna</div>)
        // }
        // else {
        //     return (<div>Welcome Guests</div>)
        // }

        // return (
        //     <div>
        //         <div>Welcome Guests</div>
        //     </div>
        // )

    }
}

export default UserGreeting
