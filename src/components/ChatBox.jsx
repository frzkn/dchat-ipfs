import React, { Component } from "react"
import Message from "./Message"
export default class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()
  }
  componentDidUpdate() {
    this.scrollRef.current.scrollIntoView()
  }
  render() {
    return (
      <div className="container mx-auto h-full">
        {this.props.messages.map(msg => {
          return <Message peer={msg.peer} message={msg.message} />
        })}
        <div className="mb-32" ref={this.scrollRef} />
        <div className="mb-10" />
      </div>
    )
  }
}
