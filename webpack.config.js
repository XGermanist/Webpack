var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin ({filename: 'main.css'});

module.exports =
{
  entry: '.src/index.js',
  output:
  {
    filename: 'build.js',
    path: './build'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        use:[
              {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
              }
            ]

      },

      {
        test: /\.css$/,
        use: extractPlugin.extract({use: ['css-loader'] })
      }

    ]
  },
  plugins: [
            extractPlugin
            ]

};
