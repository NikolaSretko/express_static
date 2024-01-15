const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("New Request", req.method, req.url);
    res.write('<h1>Welcome</h1>');
    res.end();
})

app.get('/api/services', (req, res) => {
    console.log("New Request", req.method, req.url);
    res.write('<h1>Hello back</h1>');
    res.end();
})

const PORT = 1818;
app.listen(PORT, () => console.log(`sefver läuft auf htttp://localhost/${PORT}/`));