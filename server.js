const express = require("express");
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/add-product', (req, res) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="product"/><button type="submit">Add product</button></form>`)
})

app.post('/product', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.redirect('/');
})

app.use('/', (req, res) => {
    console.log(`Tt's working!`)
    res.status(404).send('<div><h1>Page not found</h1></div>');
})

app.listen(3000);