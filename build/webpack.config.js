/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/13
 */

var path = require('path');

module.exports = {
  // 入口
  entry : './../app/index.js',
  output : {
    // 打包的文件名
    filename : 'boudle1.js',
    // 打包的文件存放路径
    path : path.resolve(__dirname, './../dist1')
  }
};