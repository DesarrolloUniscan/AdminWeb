const createError = require('http-errors');
const express = require('express');
const session= require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const apiRouter = require('./app_api/routes/index');


const TWO_HOURS= 1000 * 60 * 60 * 2


const NODE_ENV= 'development';
const SESS_NAME= 'sid';
const SESS_SECRET= 'shh!quiet,it\'asecret!';
const SESS_LIFETIME= TWO_HOURS;


const IN_PROD = NODE_ENV === 'production'

const app = express();

app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized:false,
  secret:SESS_SECRET,
  cookie:{
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}))


// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter)
app.use('/usuario', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
