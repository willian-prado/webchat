const moment = require('moment');
const model = require('../models');

const onlineUsers = [];

module.exports = (io) => {
  io.on('connection', (socket) => {
    const user = {
      randomName: socket.id.substring(0, 16),
      id: socket.id,
    };

    onlineUsers.push(user);
    console.log(`${socket.id} just arrived.`);

    io.emit('welcome', `${socket.id} just arrived.`);
    io.emit('connection', onlineUsers);

    socket.on('message', ({ chatMessage, nickname }) => {
      const timestamp = moment().format('DD-MM-YYYY HH:mm:ss A');
      const userMessage = `${timestamp} - ${nickname}: ${chatMessage}`;
      io.emit('message', userMessage);
      model.createMessage({ chatMessage, nickname, timestamp });
    });
  });
};