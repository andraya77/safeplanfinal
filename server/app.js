const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'public', 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// ORIGINAL BEFORE BUILD TRYING TO INTEGRATE
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var models = require('./models'); //added during lesson8 pg.3 BackendJS
// // according to TechCheck tutorial this fixes Axios API call cors error
// var cors = require("cors"); 
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var postsRouter = require("./routes/posts");

// // freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
// // var testAPIRouter = require("./routes/testAPI");
// // freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/


// var app = express();
// // added from TechCheck tutorial on integration - BEGIN
// // https://www.youtube.com/watch?v=dICDmbgGFdE&t=348s

// // didn't use as this will override the other welcome page in index.hbs
// // app.get("/",(req, res) => {
// //   res.send("Like this full-stack app")
// // })

// //this is not needed as in www already listening on port 3001
// // app.listen(3001, () => {
// //   console.log("server listening on port 3001");
// // })

// // added from TechCheck tutorial on integration - BEGIN 

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // according to TechCheck tutorial this fixes Axios API call cors error
// app.use(cors())

// // freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
// // app.use("/testAPI", testAPIRouter);
// // freecodecamp tutorial https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/posts", postsRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// models.sequelize.sync().then(function () {
//   console.log("DB Sync'd up")
// }); //added during lesson8 pg.3 BackendJS

// module.exports = app;


// // ORIGINAL CODE FROM CREATION OF EXPRESS PROJECT
// // var createError = require('http-errors');
// // var express = require('express');
// // var path = require('path');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');

// // var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');

// // var app = express();

// // // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'hbs');

// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);

// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   next(createError(404));
// // });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

// // module.exports = app;
