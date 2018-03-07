// Setup express
const express = require('express');
const app = express();

//Setup authroutes
require('./services/passport');
require('./routes/authRoutes')(app);

//Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT);
