const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 8000,
    open: true,
    hot: true,
  },
  entry:{
    about: path.resolve(__dirname, 'src', 'about.js'),
    index: path.resolve(__dirname, 'src', 'index.js'),
    team: path.resolve(__dirname, 'src', 'team.js'),
    contacts: path.resolve(__dirname, 'src', 'contacts.js'),
    payment: path.resolve(__dirname, 'src', 'payment.js'),
    partners:path.resolve(__dirname, 'src', 'partners.js'),
    review:path.resolve(__dirname, 'src', 'partners.js'),
    questions:path.resolve(__dirname, 'src', 'questions.js'),
    news:path.resolve(__dirname, 'src', 'news.js'),
    novost:path.resolve(__dirname, 'src', 'novost.js'),
    bonus:path.resolve(__dirname, 'src', 'bonus.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
    assetModuleFilename: 'img/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'about.html'),
      filename: 'about.html',
			chunks: ['about'],
		}),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
			chunks: ['index'],
		}),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'team.html'),
      filename: 'team.html',
			chunks: ['team'],
		}), 
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'contacts.html'),
      filename: 'contacts.html',
			chunks: ['contacts'],
		}),

    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'payment.html'),
      filename: 'payment.html',
			chunks: ['payment'],
		}),   

    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'partners.html'),
      filename: 'partners.html',
			chunks: ['partners'],
		}),   

    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'review.html'),
      filename: 'review.html',
			chunks: ['review'],
		}),   

    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'questions.html'),
      filename: 'questions.html',
			chunks: ['questions'],
		}),   
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'news.html'),
      filename: 'news.html',
			chunks: ['news'],
		}),
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'novost.html'),
      filename: 'novost.html',
			chunks: ['novost'],
		}), 
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'bonus.html'),
      filename: 'bonus.html',
			chunks: ['bonus'],
		}), 
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/img'),
            to:   path.resolve(__dirname, 'dist/img')
          }
        ]
      })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          // 'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
      },
    ],
  },

};