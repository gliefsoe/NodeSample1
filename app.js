const packageJson = require('./package.json');
const express = require('express');
const app = express();
const port = 8080;
const version = packageJson.version;

app.get('/', (req, res) => {
    res.send('hello world from node sample 1: ' + req.url);
});

app.get('/about', (req, res) => {
    console.log('version:' + version);
    res.send('about')
  })


console.log(`Root of server: ${__dirname}`);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})