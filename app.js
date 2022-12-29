const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world from node sample 1: ' + req.url);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})