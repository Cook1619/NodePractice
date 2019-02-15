const express =  require('express');

const router =  express.Router();

router.get('/',(req,res,next) => {
    res.send('<h1>Hello from express</h1>');//by default will set html content type, you can override if necessary
});

module.exports = router;