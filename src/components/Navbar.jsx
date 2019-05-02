import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar px-3 py-3 bg-green w-full shadow-md text-white flex items-center text-center md:text-left">
          <div className="logo bg-green">
            <img src={require('../Dchat.svg')} className="inline-flex " alt="logo"/>
            <p className="text-2xl inline-flex px-2 font-bold">ÐChat</p>
          </div>
        </div>
        //TODO: Peer online counter

    )
  }
}
