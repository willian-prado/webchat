const moment = require('moment');
const model = require('../models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} just arrived.`);

    io.emit('welcome', `${socket.id} just arrived.`);

    socket.on('message', ({ message, nickname }) => {
      const timestamp = moment().format('DD-MM-YYYY HH:mm:ss A');
      const userMessage = `${timestamp} - ${nickname}: ${message}`;
      io.emit('message', userMessage);
      model.createMessage({ message, nickname, timestamp });
    });
  });
};