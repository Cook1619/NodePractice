const express = require('express');

const router = express.Router();

// /admin/add-product GET
router.get('/add-product', (req, res, next) => {
    console.log('Hitting the product route');
    res.send('<html><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></html>');//by default will set html content type, you can override if necessary
});
// /admin/add-product POST, you can have the same routed listed if there using different methods
router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
