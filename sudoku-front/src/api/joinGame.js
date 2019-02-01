import constants from '../constants'

const joinGame = (gameToken, playerToken) =>
  fetch(`${constants.dev.API_URI}/join/${gameToken}/${playerToken}`)

export default joinGame
