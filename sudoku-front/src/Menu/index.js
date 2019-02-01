import React from 'react'
import createGame from '../api/createGame'
import withConnect from './withConnect'
import './Menu.css'

const inputRef = React.createRef()

const create = (push, gameCreated) => () => {
  if (inputRef && inputRef.current && inputRef.current.value) {
    const gameName = inputRef.current.value
    console.log('createGame', gameName)

    createGame(gameName)
      .then(response => response.json())
      .then(({ party }) => {
        if (party) {
          gameCreated(party)
          push(party.url)
        }
      })
  }
}

const Menu = ({ history: { push }, gameCreated }) => (
  <div className='Menu-wrapper'>
    <div className='Menu-block'>
      Create Multiplayer Private Game
    </div>
    <div className='Menu-block'>
      <input
        ref={inputRef}
        type='text'
        placeholder='provide a game name'
      />
    </div>
    <div className='Menu-block'>
      <button onClick={create(push, gameCreated)}>
        go
      </button>
    </div>
    {/* <div>Join private game</div> */}
  </div>
)

export default withConnect(Menu)
