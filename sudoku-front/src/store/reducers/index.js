import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import game from './game'

export default (history) => combineReducers({
  router: connectRouter(history),
  game
})

// const initialState = {}

// const reducer = (state = initialState, action) => {
//   // switch (action.type) {
//   //   case 'INCREMENT':
//   //     return state + 1
//   //   case 'DECREMENT':
//   //     return state - 1
//   //   default:
//   //     return state
//   // }
//   return state
// }

// export default reducer
