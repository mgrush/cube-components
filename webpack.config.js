const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

const Happypack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
  glob.sync('example/**/*.{ts,tsx,js,jsx}', {
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
    inline: true, 
    hotOnly: true,
    compress: !isWDSMode,
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
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: ["babel-loader", "awesome-typescript-loader"]
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: "source-map-loader" 
      }
    ]
  },
  plugins: (!isWDSMode ? [
    new CleanWebpackPlugin(),
  ] : []).concat(webpackPlugins, [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ])
}
