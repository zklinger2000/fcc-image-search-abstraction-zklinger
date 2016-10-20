const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// Could close off our API to rest of world on next line in cors parameters
const corsOptions = {
  origin: true,
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
  credentials: true,
  preflightContinue: true
};
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fcc-image-search-abstraction');

app.use(morgan('combined')); // Middleware for logging
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' })); // Middleware parses incoming requests into JSON
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

router(app);  // makes our app available to all of our routes

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
