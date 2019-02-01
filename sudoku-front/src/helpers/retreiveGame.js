const retreiveGame = () => {
  const game = localStorage.getItem('sudoku-game')

  if (!game) {
    return game
  }

  try {
    return JSON.parse(game)
  } catch (err) {
    return null
  }
}

export default retreiveGame
