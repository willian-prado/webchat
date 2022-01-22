const express = require('express');

const app = express();
const httpServer = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(httpServer, {
  cors: {
    origin: `https://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

require('./sockets/webchat')(io);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('index'));

httpServer.listen(PORT, () => console.log(`Socket.io server is listening on PORT ${PORT}`));