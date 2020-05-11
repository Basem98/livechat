'use strict';

const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server);
const path = require('path');
const config = require('./config/envConfig');

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('message', { message, timestamp: (new Date).toUTCString() });
  });
}
);


server.listen(config.APP.PORT, () => {
  console.log(`Server is listening on port ${config.APP.PORT}`);
})