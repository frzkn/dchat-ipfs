import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar px-3 py-3 gradient w-full shadow-md border-b-1 border-green-darkest text-white flex items-center text-center md:text-left">
          <div className="logo ">
            <img src={require('../Dchat.svg')} className="inline-flex " alt="logo"/>
            <p className="text-2xl inline-flex px-2 text-white font-bold ">ÐChat</p>
          </div>
        </div>
        //TODO: Peer online counter

    )
  }
}
