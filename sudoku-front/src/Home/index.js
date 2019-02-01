import retreiveGame from '../helpers/retreiveGame'

const checkGameInLS = (push) => {
  console.log('check game in LS')
  const game = retreiveGame()

  if (!game) {
    console.log('No game in LS, lets go to menu')
    push('/menu')
    return
  }

  const { gameToken, playerToken } = game

  if (!gameToken || !playerToken) {
    localStorage.setItem('sudoku-game', '')
    console.log('error while getting game from LS, LS cleared, lets go to menu')
    push('/menu')
    return
  }

  console.log('game exist in LS, lets go to the game')
  push(`/game/${gameToken}/${playerToken}`)
}

const Home = ({ history: { push } }) => {
  checkGameInLS(push)
  return null
}

export default Home
