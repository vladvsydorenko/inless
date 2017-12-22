const path = require('path');
const webpack = require('webpack');

module.exports = ({ service }) => ({
    devtool: 'inline-source-map',
    target: 'electron-main',
    entry: [
        `./src/${service}/index.ts`,
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: `${service}.js`
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
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
