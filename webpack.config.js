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
  glob.sync('example/**/*.ts', {
    cwd: rootDir
  }).forEach((filePath) => {
    entryFiles[ getFileName(filePath) ] = `./${filePath}`
  })

  // WDS默认支持liveReload，不过需要开启HtmlWebpackPlugin插件
  webpackPlugins.push(new HtmlWebpackPlugin({
    template: path.join(__dirname, 'example/template.html')
  }))
} else {
  entryFiles['index'] = path.join(rootDir, 'index.ts')
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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: webpackPlugins
}
