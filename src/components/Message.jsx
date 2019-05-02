import React, { Component } from 'react'


export default class Message extends Component {
  render() {
    return (
      <div className="flex px-4 py-4 ">
          <img src={require('../userPicture.svg')} className="h-10 w-10 border-5 border-green background-green rounded-full shadow-md" alt="usericon" />
        <div className="message-text flex-col shadow-sm px-4">
          <p className="peer font-bold mb-2 text-grey-darkest ">{this.props.peer}</p>
          <p className="message text-white px-4 py-4 pl-8 rounded-b-full green-color hover:bg-green rounded-r-full shadow-md">{this.props.message}</p>
        </div>
      </div>
    )
  }
}
