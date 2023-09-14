const express = require("express");

const path = require('path');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);