module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'test') {
      config.devtool('eval') // ** IMPORTANT: Fix duplicate file-path twice **
      config.module
        .rule('js')
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true })
        .after('babel-loader')
    }
  }
}
