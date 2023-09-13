const express = require("express");

const app = express();

app.use('/users', (req, res) => {
    console.log(`Hello!`)
    res.send('<div><ul><li>user 1</li><li>user 2</li></ul></div>')
})

app.use('/add-product', (req, res) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="product"/><button type="submit">Add product</button></form>`)
})

app.use('/product', (req, res) => {
    if(req.method === 'POST'){
        console.log(req.body);
    }
})

app.use('/', (req, res) => {
    console.log(`Tt's working!`)
    res.status(404).send('<div><h1>Page not found</h1></div>');
})

app.listen(3000);