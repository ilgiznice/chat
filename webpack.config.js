const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'js/'),
                loader: 'babel-loader'
            }
        ]
    }
};