const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },

    module: {

        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
                loader: 'style-loader!css-loader'
            }
        ]
    },

    mode: 'development',

    devServer: {
        open: true
    }

}
