import React, { Component } from 'react'
import cx from 'classnames'
import './NumericPad.css'

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class NumericPad extends Component {
  render () {
    const { onClickKey, displayPad, onCancel } = this.props

    return (
      <div className={cx('NumericPad-wrapper', { show: displayPad })}>
        {
          keys.map(key => (
            <div
              key={key}
              className='NumericPad-key'
              onClick={onClickKey(key)}
            >
              { key }
            </div>
          ))
        }

        <div
          className='NumericPad-key'
          onClick={onCancel}
        >
          X
        </div>
      </div>
    )
  }
}

export default NumericPad
