import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handaleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `);
        e.preventDefault();
    }


    render() {
        const {username,comments,topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label >Username: </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} id="" />
                </div>
                <div>
                    <label >Comments :  </label>
                    <textarea value={comments} onChange={this.handleCommentsChange} cols="10" rows="5"></textarea>

                </div>
                <div>
                    <label>Topic : </label>
                    <select value={topic} onChange={this.handaleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
