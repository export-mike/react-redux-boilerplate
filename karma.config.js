const webpack = require('webpack');
// See issues for details on parts of this config.
// https://github.com/airbnb/enzyme/issues/47
// had issues loading sinon as its a dep of enzyme
var argv = require('minimist')(process.argv.slice(2));


module.exports = (config) => {
  config.set({
    browsers: [ 'PhantomJS' ], // run in Chrome
    singleRun: argv.watch ? false : true, // just run once by default
    frameworks: [ 'mocha' ], // use the mocha test framework
    files: [
      'tests.webpack.js' // just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] // preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        preLoaders: [{
          test: /\.(js|jsx)$/,
          include: /src/,
          exclude: /node_modules/,
          loader: 'isparta'
        }],
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
          loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
        }, {
          test: /\.json$/,
          loader: 'json'
        },
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?mimetype=application/vnd.ms-fontobject'},
        {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        {test: /.svg(\?v=\d+\.\d+\.\d+)?$|.svg$/, loader: 'url?name=[path][name].[ext]&context=./src&mimetype=image/svg+xml'},
        {
          test: /sinon\.js$/,
          loader: 'imports?define=>false,require=>false'
        }
        ]
      },
      postcss: () => {
        return [
          require('precss'),
          require('postcss-simple-vars')({
            variables: () => {
              return require('./src/colors');
            }
          }),
          require('autoprefixer')({ browsers: ['last 2 versions'] })
        ];
      },
      isparta: {
        embedSource: true,
        noAutoWrap: true
        // these babel options will be passed only to isparta and not to babel-loader
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window'
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
      }
    },

    webpackServer: {
      noInfo: false // please don't spam the console when running in karma!
    }
  });
};
