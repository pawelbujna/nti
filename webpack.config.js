var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./client/app/app.js",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        port: 7000,
        inline: true,
        contentBase: "./client/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['ng-annotate', 'babel']
        }, {
            test: /\.html$/,
            loaders: ["raw"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.svg$/,
            loader: 'file'
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangling: false,
            sourceMap: false
        })
    ]
}
