import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connectSocket } from './api'
import Grid from './Grid'
import Home from './Home'
// import partyMock from './mocks/party.json'
import Menu from './Menu'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    connectSocket(() => {
      console.log('socket connected')
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <Grid cells={partyMock.party.puzzle} /> */}
            {/* <Menu /> */}
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/game/:gameToken" exact component={Grid} />
        </div>
      </Router>
    )
  }
}

export default App
