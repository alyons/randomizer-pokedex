const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let plugins = [
    new HtmlWebpackPlugin({
        title: 'Extra Life Slalom Atlanta',
        template: './site/index.html',
        excludeChunks: ['server']
    }),
    new MiniCssExtractPlugin({
        filename: 'style.[name].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'site', 'assets'), to: path.resolve(__dirname, 'dist', 'assets') }
      ]
    }),
];

const config = {
    entry: {
        main: './site/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: 'source-map',
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true
    //         }),
    //         new OptimizeCSSAssetsPlugin({})
    //     ]
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
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
