const express = require('express');
const app = express();
const PORT = 8080;

// REQUEST / RESPONSE
app.get('/', (req, res) => {
    res.end('Application Started enjoy ;)');
});

app.get('/cart', (req, res) => {
    res.end('Welcome to the cart');
});

app.listen(PORT, () => console.log("Server started at port", 8080));