const express = require('express')
const sudoku = require('sudoku')
const parties = {}

const createToken = () => String(new Date().getTime())

const server = () => {
  const app = express()

  app.use(function(req, res, next) {
    res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })
    next()
  })

  app.get('/life', (req, res) => {
    res.status(200).json({ status: 'running' })
  })

  app.get('/list', (req, res) => {
    res.status(200).json({ parties: Object.keys(parties) }) 
  })

  app.get('/create/:party', (req, res) => {
    if (!req.params || !req.params.party) {
      return res.status(422).send('Missing party name')
    }

    const partyName = req.params.party

    if (parties[partyName]) {
      return res.status(422).send('Party name exists, please choose another')
    }

    const gameToken = createToken()

    const puzzleIndexedZero = sudoku.makepuzzle()
    const puzzle = sudoku
      .solvepuzzle(puzzleIndexedZero)
      .map((solvedCell, index) => ({
        solution: (solvedCell + 1),
        initial: (typeof puzzleIndexedZero[index] === 'number')
          ? (puzzleIndexedZero[index] + 1)
          : puzzleIndexedZero[index]
      }))

    const party = {
      puzzle,
      name: partyName,
      token: gameToken,
      url: `/game/${gameToken}`,
      players: [],
      started: false
    }
    parties[gameToken] = party

    return res.status(200).json({ party })
  })

  app.get('/join/:gameToken/:playerToken?', (req, res) => {
    const { gameToken, playerToken } = req.params
    const party = parties[gameToken]
    
    if (!party) {
      return res.status(404).send('Party not found')
    }

    const { players } = party

    if (!playerToken) {
      if (players.length >= 2) {
        return res.status(422).send('Party full')
      }

      const playerToken = createToken()
      party.players.push(playerToken)

      parties[gameToken] = party
      return res.status(200).json({ ...party, playerToken })
    }

    if (players.includes(playerToken)) {
      return res.status(200).json({ ...party, playerToken })
    }

    return res.status(422).send('Something went wrong')
  })

  return app
}

module.exports = server
