const webpack = require('webpack');
const path = require('path');
const HtmlWebPack = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src/main.ts')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.ts$/,
            use: {
                loader: 'ts-loader',
                options: {
                    // transpileOnly: true
                },
            },
            exclude: /(node_modules)/,
        }]
    },
    devServer: {
        port: 4310,
        contentBase: path.join(__dirname, 'build'),
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
    },
    stats: {
        warnings: false
    },
    plugins: [
        new HtmlWebPack({
            template: path.join(__dirname, 'src/index.html'),
            public: '/'
        }),
        new webpack.DefinePlugin({
            env: JSON.stringify(process.env.NODE_ENV)
        }),
    ]
};