const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  plugins: [new LoadablePlugin({ filename: '../build/loadable-stats.json', writeToDisk: true })]
}
