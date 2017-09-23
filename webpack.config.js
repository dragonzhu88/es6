/**
 * Created by dragon on 2017/9/11.
 */
var path = require('path');
module.exports = {
    entry: {
        bundle: __dirname + '/src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}