const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('hello world from node sample 1: ' + req.url);
});

app.get('/about', (req, res) => {
    console.log(`Root of server: ${__dirname}`);
    res.send('about')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})