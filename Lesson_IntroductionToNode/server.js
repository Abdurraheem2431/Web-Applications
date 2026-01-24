const express   = require('express');
const app       = express();
const path      = require('path');

const PORT      = 8080;     

app.use('/', express.static(path.join(__dirname, '/public')));
console.log("__dirname:" + __dirname);

app.get('/', (req, res) => {
    //res.send("<h1>root route</h1>");
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/second', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/second.html'));
});

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>");
});

app.get('/test', (req, res) => {
    res.send("<h1>This is the test page!</h1>");
});


app.listen(PORT, () => { console.log("Server started on port:" + PORT) });