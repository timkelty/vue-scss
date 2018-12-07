module.exports = {
  use: [
    [
      '@neutrinojs/vue',
      {
        html: {
          title: 'v8-vue'
        },
        style: {
          test: /\.s?css$/,
          modulesTest: /\.module\.(css|sass|scss)$/,
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
