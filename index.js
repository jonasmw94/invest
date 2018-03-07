// Setup express
const express = require('express');
const app = express();

//fetch keys
const keys = require('./config/keys');

//Cookie-auth
const passport = require('passport');
const cookieSession = require('cookie-session');

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Setup mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);
require('./models/User');

//Setup authroutes
require('./services/passport');
require('./routes/authRoutes')(app);

//Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT);
