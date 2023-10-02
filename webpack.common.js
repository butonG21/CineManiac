const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: './src/index.js', // Your existing entry point
    details: './src/details.js', // New entry point for details.html
  },
  output: {
    filename: '[name].bundle.js', // Use [name] to create dynamic output filenames
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer,
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  /* plugin */
  plugins: [
    /* HTML Webpack Plugin for index.html */
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'], // Specify which entry point to include in this HTML file
    }),
    /* HTML Webpack Plugin for details.html */
    new HtmlWebpackPlugin({
      template: './src/details.html', // Path to your details.html template
      filename: 'details.html', // Output filename
      chunks: ['details'], // Specify which entry point to include in this HTML file
    }),
    // ... other plugins ...
  ],
};
