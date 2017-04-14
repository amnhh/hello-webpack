/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/14
 */

var path = require('path');

module.exports = {
  entry : [
    './../js/main1.js',
    './../js/main2.js'
  ],
  output : {
    filename : 'boudle_sourcemap.js',
    path : path.resolve(__dirname, './../dist/')
  }
};