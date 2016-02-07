require('babel-register');
if (process.env.NODE_ENV === 'production') {
  require('./server.prod');
} else {
  require('./server.dev');
}
