const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

// REQUEST / RESPONSE
app.get('/', (req, res) => {
    // res.end('Application Started enjoy ;)');
    res.send('<h1>click me<h1/>');
});

app.get('/cart', (req, res) => {
    res.end('Welcome to the cart');
});

app.post('/login', (req, res) => {
    const body = req.body;
    console.log(body.username, body.pass);

    // store in db

    res.end('logged in successfully')
});

app.post('/register', (req, res) => {
    const body = req.body;
    console.log(body.username, body.pass);

    // store in db

    res.end('registered in successfully')
});

app.listen(PORT, () => console.log("Server started at port", 8080));