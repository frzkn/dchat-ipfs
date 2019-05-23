import React, { Component } from "react"
import "./App.css"

import IPFS from 'ipfs'
import Room from 'ipfs-pubsub-room'

import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import ChatControls from './components/ChatControls'

const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  },
  config: {
    Addresses: {
      Swarm: [
        "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"
      ]
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.ipfs = new IPFS(ipfsOptions)
    this.state = {
      room: null,
      messages: [
        {
          peer: "Admin",
          message: "Welcome to DChat, Your messages are stored on all conected IPFS nodes therfore chat persists on other nodes until browser window is closed."
        }
      ],
      peers: [],
      info: null,
      peerCounter: 0
    }
  }

  componentWillMount() {
    this.ipfs.once('ready', () => this.ipfs.id(async (err, info) => {
      if (err) { window.alert(err) }
      this.setState({ info })
      this.room = Room(this.ipfs, 'dchat-ipfs-1')
      this.setState({
        ...this.state,
        room: this.room
      })
      this.room.on('peer joined', (peer) => {
        console.warn('PEER LIST')
        console.log(this.room.getPeers())
        console.log(peer + " has joined")
        this.peerCounter++;
      })
      this.room.on('peer left', (peer) => {
        console.log(peer + " has left")
      })
      this.room.on('message', (msg) => {
        let received = msg.data.toString('utf8')
        let stateMessages = this.state.messages
        stateMessages.push(JSON.parse(received))
        this.setState({messages: stateMessages})
      })
    }))
  }

  sendBroadcast = (data) => {
    this.state.room.broadcast(data)
  }


  render() {

    return (
      <React.Fragment >

        <div className="wrapper-container bg-grey-lightest">
          <Navbar peerCounter={this.state.peerCounter}/>
          <ChatBox messages={this.state.messages} />
          <ChatControls messages={this.state.messages} sendBroadcast={this.sendBroadcast} />
        </div>
      </React.Fragment >
    )
  }
}
export default App
