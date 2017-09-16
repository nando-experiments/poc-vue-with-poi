const OfflinePlugin = require('offline-plugin')

module.exports = {
  cssModules: true,
  extractCSS: false,
  autoprefixer: {
    browsers: ['> 5%']
  },
  html: {
    template: 'src/index.html'
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.{scss,sass}$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    })

    if (config.mode === 'production') {
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      }))
    }

    return config
  }
}
