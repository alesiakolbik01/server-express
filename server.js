const express = require("express");

const app = express();



app.use('/users', (req, res, next) => {
    console.log(`Hello!`)
    res.send('<div><ul><li>user 1</li><li>user 2</li></ul></div>')
})

app.use('/', (req, res, next) => {
    console.log(`Tt's working!`)
    res.send('<div><h1>Hello from server!</h1></div>')
})


app.listen(3000);