const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });
const PORT = process.env.PORT || 5000;

const router = require('./router')

app.use(router)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('value',{apple:'10231',banana:'29'})
  });


server.listen(PORT,()=>console.log(`server start at port ${PORT}`))