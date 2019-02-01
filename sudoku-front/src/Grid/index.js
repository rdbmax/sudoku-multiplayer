import React, { Component } from 'react'
import Cell from './Cell'
import NumericPad from '../NumericPad'
import './Grid.css'
import partyMock from '../mocks/party.json'

class Grid extends Component {
  state = {
    activeCell: null,
    displayPad: false
  }

  static defaultProps = {
    cells: partyMock.party.puzzle
  }

  constructor (props) {
    super(props)
    const gameToken = props.location.pathname
      .split('/')
      .filter(segment => segment)[1]

    console.log(gameToken)
    if (gameToken) {
      
    }
  }

  onClickCell = cellIndex => () => {
    this.setState({
      activeCell: cellIndex,
      displayPad: Boolean(cellIndex)
    })
  }
  
  onClickNumPadKey = key => () => {
    this.setState({
      activeCell: null,
      displayPad: false
    })
    console.log('onClickNumPadKey', key)
  }

  render () {
    const { cells } = this.props
    const { activeCell, displayPad } = this.state

    return (
      <div className='Grid-wrapper'>
        { cells.map((cell, index) => (
          <Cell
            key={index}
            isActive={activeCell === index}
            value={cell}
            onClick={this.onClickCell(index)}
          />
        )) }

        <NumericPad
          displayPad={displayPad}
          onClickKey={this.onClickNumPadKey}
          onCancel={this.onClickCell(null)}
        />
      </div>
    )
  }
}

export default Grid
