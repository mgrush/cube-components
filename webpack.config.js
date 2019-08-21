const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const devPort = 8080
const entryFiles = {}
const rootDir = __dirname
const getFileName = (filePath) => (filePath.match(/\/([^\.]+)\..+$/) || [])[1]

glob.sync('example/**/*.{ts,tsx,js,jsx}', { cwd: rootDir }).forEach(filePath => {
  entryFiles[ getFileName(filePath) ] = `./${filePath}`
})

module.exports = {
  entry: entryFiles,
  mode: 'development',
  devServer: {
    inline: true,
    hotOnly: true,
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  /**
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  **/
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: ["babel-loader", "awesome-typescript-loader"]
    }, {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: 'svg-inline-loader'
    }, {
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "source-map-loader"
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example/template.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
