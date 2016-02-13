'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DEV = process.env.NODE_ENV !== 'production';

const config = {
  entry: ['./src/index.js'],
  debug: DEV,
  devtool: DEV ? 'source-map' : 'source-map',
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.ico$/,
      loader: 'url-loader?name=[path][name].[ext]&context=./src'
    }, {
      test: /\.html/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.css$/,
                                // or ?sourceMap&modules&importLoaders=1!postcss-loader
      loader: DEV ? 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' : ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      // 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
    },
    { test: /\.json/, loader: 'json'},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?mimetype=application/vnd.ms-fontobject'},
    {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    {test: /.svg(\?v=\d+\.\d+\.\d+)?$|.svg$/, loader: 'file?name=[path][name].[ext]&context=./src&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    // Output our index.html and inject the script tag
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    // Without this, Webpack would output styles inside JS - we prefer a separate CSS file
    new ExtractTextPlugin('styles.css'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  postcss: () => {
    return [
      require('precss'),
      require('postcss-advanced-variables')({
        variables: require('./src/colors')
      }),
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ];
  }
};

if (DEV) {
  console.log('dev build');
  config.entry.push('webpack-hot-middleware/client');

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
} else {
  console.log('production build');
  // Minify JS for production
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('"production"')
      }
    })
  );
}

module.exports = config;
