import React, { Component } from 'react'


export default class Message extends Component {
  render() {
    return (
      <div className="flex px-4 py-4 ">
        <img src={require('../user.svg')} className="inline-flex h-12 w-12  bg-green-light border-grey-lightest rounded-full shadow-sm" alt="usericon"/>
        <div className="message-text flex-col shadow-sm px-4">
          <p className="peer font-bold mb-2">{this.props.peer}</p>
          <p className="message text-white px-4 py-4 pl-8 bg-green rounded-b-full hover:bg-green-light  rounded-r-full shadow-sm">{this.props.message}</p>
        </div>
      </div>
    )
  }
}
