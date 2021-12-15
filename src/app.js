const express = require('express');
const path = require('path');
const app = express();
const url = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.listen(url, () => {
    console.log(`Server Listening at port ${url}.`);
})