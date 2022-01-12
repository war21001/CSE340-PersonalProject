const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pageNotFoundController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //this is the default

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(pageNotFoundController.pageNotFound);

app.listen(3000);