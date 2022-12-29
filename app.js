const packageJson = require('./package.json');
const express = require('express');
const WebSocket = require('ws');

const port = 8080;
const version = packageJson.version;

const app = express();
const wss = new WebSocket.Server({ port: 3000 });

// store the connection Count
let connectionCount = 0;
// store the WebSocket objects for each client
const clients = {};

wss.on('connection', (ws, req) => {
    // increment the connection count
    connectionCount++;
    // assign a unique identifier to the client
    const clientId = req.headers['sec-websocket-key'];

    // store the client's WebSocket object
    clients[clientId] = ws;
    // log the connection count
    console.log(`New WebSocket connection: ${clientId}`);
    console.log(`Number of connections: ${connectionCount}`)
    console.log(`Client connected remoteaddress: ${req.connection.remoteAddress}`);
});

app.get('/', (req, res) => {
    res.send('hello world from node sample 1: ' + req.url);
});

app.get('/about', (req, res) => {
    
    res.send('about')
  })

console.log('version:' + version);
console.log(`Root of server: ${__dirname}`);

app.listen(port, () => {
    console.log(`NodeSample listening at http://localhost:${port}`);
})