const moment = require('moment');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`${socket.id} just arrived.`);

    io.emit('welcome', `${socket.id} just arrived.`);

    socket.on('message', ({ chatMessage, nickname }) => {
      const timestamp = moment().format('DD-MM-YYYY HH:mm:ss A');
      const userMessage = `${timestamp} - ${nickname}: ${chatMessage}`;
      io.emit('message', userMessage);
    });
  });
};