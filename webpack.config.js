const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const { ContextReplacementPlugin } = require('webpack');

module.exports = ({ mode } = { mode: 'development' }) => ({
  mode,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new WebpackBundleAnalyzer({ openAnalyzer: false }),
    new ContextReplacementPlugin(/date\-fns[\/\\]/, new RegExp(`[/\\\\\](pl|en|de)[/\\\\\]`))
  ]
});
