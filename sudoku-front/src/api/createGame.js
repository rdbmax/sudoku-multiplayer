import constants from '../constants'

const createGame = gameName =>
  fetch(`${constants.dev.API_URI}/create/${gameName}`)

export default createGame
