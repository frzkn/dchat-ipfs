import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import ChatControls from './components/ChatControls'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          peer: "Admin",
          message: "Welcome to DChat"
        }
      ]
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(newState) {
    this.setState({
      messsages: newState
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-container bg-grey-lightest">
          <Navbar />
          <ChatBox messages={this.state.messages} />
          <ChatControls messages={this.state.messages} changeState={this.changeState} />
        </div>
      </React.Fragment>
    )
  }
}


export default App
