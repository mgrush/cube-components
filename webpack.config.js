const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devPort = 8080
const rootDir = __dirname
const isWDSMode = process.argv[1] && process.argv[1].endsWith('/webpack-dev-server')

const getFileName = function(filePath) {
  return (filePath.match(/\/([^\.]+)\..+$/) || [])[1]
}

const entryFiles = {}
const webpackPlugins = []

// 如果是本地开发调试模式，则以example中的测试文件作为Entry Files
if (isWDSMode) {
  glob.sync('example/**/*.js', {
    cwd: rootDir
  }).forEach((filePath) => {
    entryFiles[ getFileName(filePath) ] = `./${filePath}`
  })

  webpackPlugins.push(new HtmlWebpackPlugin({
    template: path.join(__dirname, 'example/template.html')
  }))
} else {
  entryFiles['index'] = path.join(rootDir, 'index.js')
}

module.exports = {
  mode: 'production',
  entry: entryFiles,
  devServer: {
    port: devPort,
    contentBase: path.join(__dirname, 'example')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: webpackPlugins
}
