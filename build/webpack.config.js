/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/4/13
 */

var path = require('path');

module.exports = {
  // 入口
  // 如果在外部，比如我在外部 `pkg` 里面定义指令 : `build1` => "webpack --config build/webpack.config.js"
  // 我在这个 `config` 里面的所有的东西，都会以命令定义的文件层级来确定，也就是以 `pkg` 所在的地址来确定,
  // 而不是以 `config` 文件所在的 `pwd` 来确定
  entry : './app/index.js',
  output : {
    // 打包的文件名
    filename : 'boudle1.js',
    // 打包的文件存放路径
    path : path.resolve(__dirname, './../dist1')
  }
};