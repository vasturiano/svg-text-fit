const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'svg-text-fit.js',
        libraryTarget: 'umd',
        library: 'TextFit'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};