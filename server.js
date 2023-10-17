const express = require("express");

const path = require('path');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);

app.use(shopRoutes);

app.use('/', (req, res) => {
    res.render('404', {docTitle: "Page not Found"})
})

app.listen(3000);