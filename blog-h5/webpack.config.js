
var webpack = require('webpack');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:__dirname + "/blog" ,
        filename:'bundle.js'
    },
    devtool:'source-map',
    devServer: {
      disableHostCheck: true
    },
    module:{
        rules:[
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: '/node_modules/',
              query: {
                  presets: ['react', 'es2015']
              }
          },
          {
            test: /\.less$/,
            use: [
             "style-loader",
             "css-loader",
             "less-loader",
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              'file-loader',
            ]
          },
          {
            test: /\.eot/,
            use: [
              'file-loader',
            ]
          },
          {
            test: /\.woff/,
            use: [
              'file-loader',
            ]
          },
          {
            test: /\.ttf/,
            use: [
              'file-loader',
            ]
          },
          {
            test: /\.svg/,
            use: [
              'file-loader',
            ]
          }
        ]
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
};
