module.exports = {
  use: [
    [
      '@neutrinojs/vue',
      {
        html: {
          title: 'Vue + SCSS Example'
        },
        style: {
          test: /\.s?css$/,
          modulesTest: /\.(s?css)$/,
          loaders: [
            {
              loader: 'sass-loader',
              useId: 'sass'
            }
          ]
        }
      }
    ]
  ]
};
