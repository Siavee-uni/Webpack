const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
});