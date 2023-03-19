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
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ttf']
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
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:
                    'asset/resource'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}