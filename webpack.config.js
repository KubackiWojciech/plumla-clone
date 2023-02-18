const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}