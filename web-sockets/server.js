import express from 'express';
import { Server } from 'socket.io';
import http from 'http';


let app = express();
let server = http.createServer(app);

let io = new Server(server);

io.on('connection', socket => {
    console.log('A new client has connected!');

    socket.on('new message', message => {
        console.log(`The client says: ${message}`);
        socket.broadcast.emit('incoming message', message);
    });
});


server.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening on port ' + (process.env.PORT || 8080))
});