import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Krishna'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA ComponentdidMount')
    }


    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifecycleB />
                LifecycleA
                </div>
        )
    }
}

export default LifecycleA