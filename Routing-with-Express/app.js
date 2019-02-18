const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes =  require('./routes/shop');

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));
//This grants read permission to the public folder which will serve the css files
app.use(express.static(path.join(__dirname, 'public')));

//By putting /admin it allows you to not have to put in the admin.js file because all files start with the /admin path
app.use('/admin',adminData.routes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./', 'views','pageNotFound.html'));
})

app.listen(3000);