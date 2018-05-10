const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const path = require('path');
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        server: './src/server/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    mode: "development",
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
       new Dotenv()
    ]
}