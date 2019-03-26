import React, { Component } from "react"
export default class ChatControls extends Component {

  constructor(props) {
    super(props)
    this.sendMessage = this.sendMessage.bind(this)
  }
  sendMessage() {
    if (this.refs.name.value !== "") {

      let newObj = {
        peer: this.refs.name.value,
        message: this.refs.message.value
      }
      this.props.sendBroadcast(JSON.stringify(newObj))
    }
  }
  render() {
    return(
      <div className="">
        <div className="flex w-screen mx-auto fixed pin-b container mx-auto justify-around pin-l pin-r bg-white border-t-2 rounded-t-xl border-green ">
          <div className="flex-col md:flex p-2 ">
            <input
              type="text"
              className="p-2 border-green rounded-full capitalize font-bold my-1"
              placeholder="Name"
              ref="name"
            />
            <input
              type="text"
              className="p-2 border-green rounded-full font-bold my-1"
              placeholder="Message"
              ref="message"
            />
          </div>
          <img
            src={require("../send.svg")}
            className="bg-green hover:bg-green-light cursor-pointer h-12 w-12 border-white border-5 p-2 my-auto  mr-2 md:mr-8     rounded-full"
            onClick={this.sendMessage} alt="send"
          />
        </div>
      </div>
    )
  }
}
