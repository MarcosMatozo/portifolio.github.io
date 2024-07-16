const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
entry: './src/index.js', // ou o caminho do seu arquivo de entrada
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(scss|sass)$/, // regex para encontrar arquivos .scss
          use: [
            'style-loader', // injeta CSS no DOM
            'css-loader',   // interpreta @import e url() como importações/requisições de CSS
            'sass-loader',  // compila Sass para CSS
          ],
        },
        {
          test: /\.(js|jsx)$/, // regex para encontrar arquivos .js ou .jsx
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // usa o Babel para transpilar JavaScript
          },
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // resolve esses tipos de arquivos
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

}