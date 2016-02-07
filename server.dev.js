/* eslint no-console:0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import opn from 'opn';
const app = express();
const compiler = webpack(config);
const port = 3000;

let opened = false;
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  if (!opened) {
    opn(`http://localhost:${port}`);
    opened = true;
  }
  console.log('Dev Server');

  console.log(`🌎  Listening on port ${port}`);
});
