import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Krishna'
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB ComponentdidMount')
    }


    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifecycleB</div>
        )
    }
}

export default LifecycleB