const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/18-webpack/index.ts',
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
};
