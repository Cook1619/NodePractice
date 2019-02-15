const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('Hitting the product route');
    res.send('<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></html>');//by default will set html content type, you can override if necessary
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
