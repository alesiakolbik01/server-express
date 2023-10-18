const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product',
     {
        docTitle: "Add product",
        path: "/admin/add-product",
        productCss: true,
        activeAddProduct: true
    })
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