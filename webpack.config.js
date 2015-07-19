module.exports = {
  entry: {
    public: './app/components/Main.js',
    tests: './app/specs/app.spec.js'
  },
  output: {
    filename: '[name]/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        'test': /\.jsx?$/,
        'exclude': /(node_modules|bower_components)/,
        'loader': 'babel'
      }
    ]
  }
}