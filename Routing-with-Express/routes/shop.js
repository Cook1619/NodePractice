const express =  require('express');
const path = require('path');

const router =  express.Router();

router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,"../", 'views', 'shop.html'));//by default will set html content type, you can override if necessary
});

module.exports = router;