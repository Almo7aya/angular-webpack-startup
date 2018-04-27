const webpack = require('webpack');
const path = require('path');
const HtmlWebPack = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src/main.ts')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.[hash].js'
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
                    transpileOnly: true
                }
            }
        }]
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
    ],
    devServer: {
        port: 4310,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build')
    }
};