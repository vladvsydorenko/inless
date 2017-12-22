const path = require('path');
const webpack = require('webpack');

const targetMap = {
    'frontend': 'web',
    'backend': 'node',
    'electron': 'electron-main',
};

const makeConfig = service => {
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
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
        ],
    };
};

module.exports = ({ services }) => {
    return services
        .split(',')
        .map((service) => makeConfig(service));
};
