require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const { Console } = require('console');



const app = express();

const PORT_URI = process.env.PORT_URI;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/',(req, res)=>{
  res.send('<h1>server is running</h1>')
})

// catch 404 and forward to error handle//
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT_URI,() => {
  console.log("server is running on PORT :4000");
});

module.exports = app;
