const express = require('express');
var app = express();

const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session')
const passport = require('passport')
const dotenv = require('dotenv').config()
const methodOverride = require('method-override')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '/public/')));

app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

const homePath = require('./routes/index')
const uploadPath = require('./routes/upload')
const emailPath = require('./routes/email')
const managePath = require('./routes/manage')
const loginPath = require('./routes/login')
const registerPath = require('./routes/register')
const logoutPath = require('./routes/logout')

app.use('/', homePath)
app.use('/upload', uploadPath)
app.use('/email', emailPath)
app.use('/manage', managePath)
app.use('/login', loginPath)
app.use('/register', registerPath)
app.use('/logout', logoutPath)

app.get('*', function(req, res, next) {
  res.render('notFound')
});

app.listen(8080, function (error) {
  if (error) throw error
  console.log("Server created Successfully on PORT 8080")
})

module.exports = app;