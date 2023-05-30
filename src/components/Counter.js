import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        //    this.setState({
        //     count : this.state.count + 1
        //    },()=>{
        //     console.log('Callback Value',this.state.count);
        //    })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;