const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = [
    { name: 'index', path: './src/index.html' },
    { name: 'fgbou', path: './src/pages/fgbou.html' },
    {name: 'xxxvi', path: './src/pages/xxxvi.html'},
    {name: 'student-table', path: './src/pages/student-table.html'},
    {name: 'scholarship', path: './src/pages/scholarship.html'},
    {name: 'e-resources', path: './src/pages/e-resources.html'},
    {name: 'graduade', path: './src/pages/graduade.html'},
    {name: 'step-science', path: './src/pages/step-science.html'},
    {name: 'actual-block', path: './src/pages/actual-block.html'},

    
];

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        ...pages.map(page => new HtmlWebpackPlugin({
            filename: page.name + '.html',
            template: page.path
        }))
    ]
};