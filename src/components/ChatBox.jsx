import React, { Component } from "react"
import Message from "./Message"
export default class ChatBox extends Component {
  render() {
    return (
      <div className="container mx-auto h-full overflow-y-auto">




        {this.props.messages.map(msg => {
          return <Message peer={msg.peer} message={msg.message} />
        })}



        <div className="mb-32" />
        <div className="mb-10" />
      </div>
    )
  }
}
