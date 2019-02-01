const app = require('./app/server.js')
const http = require('http').Server(app())
const io = require('socket.io')(http)

const PORT = 80

io.on('connection', socket => {
  socket.on('tryConnect', () => {
    socket.emit('sucessConnect')
    console.log('user connected')
  })
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
