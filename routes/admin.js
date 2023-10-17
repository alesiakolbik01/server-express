const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {docTitle: "Add product", path: "/admin/add-product"})
})

router.post('/add-product', (req, res) => {
    console.log(JSON.stringify(req.body));
    products.push({title: req.body.product})
    res.redirect('/');
})

module.exports = {
    router,
    products
}