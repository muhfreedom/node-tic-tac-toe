import socketIoClient from 'socket.io-client';
import * as readline from 'node:readline/promises';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let socket = socketIoClient('http://127.0.0.1:8080');


socket.on('your turn', async () => {
    let response = await rl.question('It\'s your turn now! Please enter your next move: ');
});

socket.on('info', message => {
    console.log(message);
});