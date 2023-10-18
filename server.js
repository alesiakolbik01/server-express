const express = require("express");

const path = require('path');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);

app.use(shopRoutes);

app.use('/', (req, res) => {
    res.status(400).render('404', { path:'/404', docTitle: "Page not Found" })
})

app.listen(3000);