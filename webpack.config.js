const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const targetMap = {
    'frontend': 'web',
    'backend': 'node',
    'electron': 'electron-main',
};

const makeConfig = (service) => {
    const plugins = [new webpack.optimize.ModuleConcatenationPlugin()];
    if (service === 'frontend') plugins.push(new HtmlWebpackPlugin({ template: `./src/${service}/index.html` }));

    return {
        devtool: 'eval',
        target: targetMap[service],
        entry: `./src/${service}/index.ts`,
        output: {
            path: path.join(process.cwd(), 'dist'),
            filename: `${service}.js`,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader' },
            ],
        },
        plugins,
    };
};

module.exports = ({ services }) => {
    return services
        .split(',')
        .map((service) => makeConfig(service));
};
