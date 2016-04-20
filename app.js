/* REQUIRES */
// ...npm
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ...local
var index = require('./routes/index.js');
var app = express();


/* CONNECT TO MONGOOSE */
mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/test');


/* CONFIG APP */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


/* ROUTING */
app.get('/', index.signin);
app.get('/signin', index.signin);
app.get('/question', index.question);
app.get('/finish', index.finish);


app.listen(process.env.PORT || 3000);
console.log("Running on port 3000");
