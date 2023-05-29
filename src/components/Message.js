import React, { Component } from "react";
import Welcome from "./Welcome";

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message : "Welcome Visitors"
        }
    }
    changeMessage(){
        this.setState({
            message : "Thanks For your Message"
        })
    }
      render(){
        return (
            <div>
                   <h1>{this.state.message}</h1>
                   <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
         
        );
      }
}

export default Message;