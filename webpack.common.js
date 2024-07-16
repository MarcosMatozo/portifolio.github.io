const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // ou o caminho do seu arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/, // regex para encontrar arquivos .scss
        use: [
          'style-loader', // injeta CSS no DOM
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,  // Ativar CSS Modules
            // },
          },
          // 'css-loader',   // interpreta @import e url() como importações/requisições de CSS
          'sass-loader',  // compila Sass para CSS
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/, // regex para encontrar arquivos .js ou .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // usa o Babel para transpilar JavaScript
        },
      },
      {
        test: /\.(mp4|webm|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'media'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource', // substitui o file-loader para Webpack 5
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // resolve esses tipos de arquivos
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
  ],
  watch: true
};
