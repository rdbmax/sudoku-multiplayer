import openSocket from 'socket.io-client'

const  socket = openSocket('http://localhost:80')

export const connectSocket = cb => {
  socket.on('sucessConnect', cb)
  socket.emit('tryConnect')
}
