const path = require('path');
const webpack = require('webpack');

module.exports = ({service}) => ({
    devtool: 'inline-source-map',
    target: 'electron-main',
    entry: `./src/${service}/index.ts`,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `${service}.js`
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
});