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
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    
    changeState = ()=>{
          this.setState({
            name: 'RadhaSHyamsundar'
          })
    }


    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            
            </div>
        )
    }
}

export default LifecycleA