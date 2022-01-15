const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { listenerCount } = require('process');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('61e1fd63e7a009f6ce43c3f2')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
.connect('mongodb://localhost:27017')
.then(result => {
  User.findOne().then(user =>{
    if (!user){
      const user = new User({
        name: 'Lisa',
        email: 'Lisa@home.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  });
  
  app.listen(3000);
})
.catch( err =>{
  console.log(err);
});