const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve:{
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename:"style.css"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            }
        ]
    }
}