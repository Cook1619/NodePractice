const express = require('express');
const path =  require('path');

const router = express.Router();

const products = [];

// /admin/add-product GET
router.get('/add-product', (req, res, next) => {
    console.log('Hitting the product route');
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))//by default will set html content type, you can override if necessary
});
// /admin/add-product POST, you can have the same routed listed if there using different methods
router.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.products = products;
