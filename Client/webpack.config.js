const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
    entry: './src/scripts/site.ts',
    output: {
        filename: 'site.js',
        path: path.resolve(__dirname, '/wwwroot/Themes/Dunamix.Material2SicElf/css')
    },
    devServer: {
        static: path.resolve(__dirname, '/wwwroot/Themes/Dunamix.Material2SicElf/css'),
        port: 8080,
        hot: true
    },
    devtool: 'source-map',
    watch: true,
    stats: {
        all: false,
        assets: true
    },
    resolve: {
        extensions: ['.ts', '.scss']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    }
                }
            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'theme.min.css',
        }),
        new WebpackBar(),
        new FriendlyErrorsWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: ['/node_modules/', '/2sxc/'],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ],
        },
        {
            test: /\.ts$/,
            exclude: ['/node_modules/', '/2sxc/'],
            use: {
                loader: 'ts-loader'
            }
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                }
            }]
        }
        ]
    }
}