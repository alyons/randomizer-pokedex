const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let plugins = [
  new HtmlWebpackPlugin({
      title: 'Randomizer Pokedex',
      template: './site/index.html',
      excludeChunks: ['server']
  }),
  // new CopyPlugin({
  //   patterns: [
  //     { from: path.resolve(__dirname, 'site', 'assets'), to: path.resolve(__dirname, 'dist', 'assets') }
  //   ]
  // }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

const config = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './site/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ico|svg|jpg|png)$/,
                loader: 'file-loader'
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            }
        ]
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', 'jsx']
    }
};

module.exports = config;
