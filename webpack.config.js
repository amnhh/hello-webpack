/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/13
 */

var path = require('path');
module.exports = {
  entry : './test2/verder.js',
  output : {
    filename : 'Amnhh',
    path : path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: 'css-loader'
      },
      // 给给。。放弃
      {
        test : /\.svg/,
        use : 'svg-loader'
      }
    ]
  }
};