const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes =  require('./routes/shop');

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));

//By putting /admin it allows you to not have to put in the admin.js file because all files start with the /admin path
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'./', 'views','pageNotFound.html'));
})

app.listen(3000);