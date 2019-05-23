import React, { Component } from "react"
export default class ChatControls extends Component {

  sendMessage = (e) => {
    if(e) e.preventDefault()
    if (this.refs.name.value !== "" && this.refs.message.value !== "") {

      let newObj = {
        peer: this.refs.name.value,
        message: this.refs.message.value
      }
      this.refs.message.value = ''
      this.props.sendBroadcast(JSON.stringify(newObj))
    }
  }

  render() {
    return (
      <div className="">
        <div className="flex w-screen mx-auto fixed pin-b container mx-auto justify-around pin-l pin-r bg-white border-t-2 rounded-t-xl border-green ">
          <div className="flex-col md:flex p-2 ">
            <form className="flex-col" onSubmit={this.sendMessage}>
              <input
                type="text"
                className="p-2 border-green rounded-full capitalize block font-bold my-1"
                placeholder="Name"
                ref="name"
              />
              <input
                type="text"
                className="p-2 border-green rounded-full font-bold my-1"
                placeholder="Message"
                ref="message"
              />
              <input
                className="invisible"
                type="submit"
                />
            </form>
          </div>

          <img
            src={require("../send.svg")}
            className="bg-green gradient hover:bg-green-light cursor-pointer h-12 w-12 border-white border-5 p-2 my-auto  mr-2 md:mr-8     rounded-full"
            onClick={this.sendMessage} alt="send"
          />
        </div>
      </div>
    )
  }
}
