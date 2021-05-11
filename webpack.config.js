const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin ({
        title: 'Livecoin PRO',
        favicon: './assets/favicon.ico',
        template: path.join(__dirname, './src', 'index.html')
    })],
    devServer: {
        contentBase: './dist',
        open: true
    }
}