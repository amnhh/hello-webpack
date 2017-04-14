/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/14
 */

var path = require('path');

module.exports = {
  entry : './../js/main.jsx',
  output : {
    filename : 'boudle.js',
    path : path.resolve(__dirname, './../dist')
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  }
};