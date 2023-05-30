import React, { Component} from 'react'
import RegCom from './RegCom'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Krishna'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Krishna'
            })
        }, 2000)
    }
    render() {
        console.log('********Parent Component Render*********')
        return (
            <div>ParentComp
                <MemoComp name={this.state.name} />
                {/* <RegCom name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>

        )
    }
}

export default ParentComp