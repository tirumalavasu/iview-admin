const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// Project deployment basis
//By default, we assume that your app will be deployed in the root of the domain.
// E.g：https://www.my-app.com/
//default：'/'
// If your application is deployed in a subpath, you need to specify a subpath here.
// E.g：https://www.foobar.com/my-app/
// Need to change it to'/my-app/'
// iview-admin Online demo package path： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // If you don't need to use eslint，把lintOnSave Set tofalse即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value Define it yourself, such as
      .set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // Does not generate a .map file when set to false.

  productionSourceMap: false
  // Write the base path of the interface you call here to solve the cross-domain. If the proxy is set, then the baseUrl of your local development environment axios should be written as '', ie an empty string.

  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}