var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /.less/,
                loader: 'style!css!less'
            },
            {
                test: /.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 1024,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                fetch: 'isomorphic-fetch'
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            })
        ]

}


if(process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
