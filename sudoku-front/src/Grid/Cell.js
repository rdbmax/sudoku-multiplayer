import React, { Component } from 'react'
import cx from 'classnames'

class Cell extends Component {
  render () {
    const { value, onClick, isActive } = this.props

    return (
      <div
        className={cx('Cell-wrapper', { isActive })}
        onClick={onClick}
      >
        { value }
      </div>
    )
  }
}

export default Cell
