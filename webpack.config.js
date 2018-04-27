const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/main.ts')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.ts$/,
            use: {
                loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true
                }
            }
        }]
    },
    stats: {
        warnings: false
      }
};