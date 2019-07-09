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
  plugins: [new LoadablePlugin()]
}
