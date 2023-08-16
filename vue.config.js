
module.exports = {
  publicPath:'./',
  outputDir: 'dist', // 输出文件目录
  lintOnSave:false,
  devServer: {
      proxy: {
          '/api': {
              target: 'http://114.55.41.72:3000/', //接口域名
              changeOrigin: true,             //是否跨域
              ws: true,                       //是否代理 websockets
              secure: true,                   //是否https接口
              pathRewrite: {                  //路径重置
                  '^/api': ''
              }
          }
      }
  }
};