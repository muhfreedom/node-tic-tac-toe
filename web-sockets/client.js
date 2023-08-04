import socketIoClient from 'socket.io-client';
import * as readline from 'node:readline/promises';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let socket = socketIoClient('http://127.0.0.1:8080');

socket.on('incoming message', message => {
    console.log(`\nReceived a new message: ${message}`);
    process.stdout.write('Enter a message and hit "return" to send: ');

});

async function startApp() {
    while (true) {
        let response = await rl.question('Enter a message and hit "return" to send: ')
        socket.emit('new message', response);
    }
}

startApp();