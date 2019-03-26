import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar py-5 px-5 bg-green w-full shadow-md text-white text-center md:text-left">
        <div className="logo bg-green">
          <img src={require('../Dchat.svg')} className="inline-flex " />
          <p className="text-2xl inline-flex px-2 font-bold">ÐChat</p>
        </div>
      </div>
    )
  }
}
