const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

app.use(express.json())

function readHtmlData(fname) {
    return fs.readFileSync('./static/' + fname, (err, data) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log(data.toString());
            return data.toString();
        }
    }).toString();
}

// REQUEST / RESPONSE
app.get('/', (req, res) => {
    // res.end('Application Started enjoy ;)');
    res.send(readHtmlData('home.html'));
});

app.get('/about', (req, res) => {
    res.end(readHtmlData('about.html'));
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