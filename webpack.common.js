const path = require('path');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicFilesPath = path.resolve(__dirname, 'public');

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
   entry: {
      app: './src/index.js'
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
         template: path.resolve(publicFilesPath, 'index.html')
      })
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: sassModuleRegex,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ],
  }
};
