/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/14
 */
var path = require('path');

module.exports = {
  entry : './../js/main.js',
  output : {
    filename : 'boudle.js',
    path : path.resolve(__dirname, './../dist')
  },
  module : {
    loaders : [
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      }
    ]
  }
};