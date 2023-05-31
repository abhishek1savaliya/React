import React, { Component } from 'react'

export default class ClickCounterTwo extends Component {


    render() {
        const { count,incrementCount } = this.props
        console.log(count)
        return (
            <button onClick={incrementCount}>Click {count} times</button>
        )
    }
}
