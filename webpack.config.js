var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./client/app/app.js",
    output: {
        path: "./client/",
        filename: "bundle.js"
    },
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
            loader: 'raw'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.svg$/,
            loader: 'file'
        }, {
            test: /\.(scss|sass)$/,
            loader: 'style!css!sass'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
}
