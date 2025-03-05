const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Determine if we're in development or production
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/game.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
        publicPath: isDevelopment ? '/' : '/projects/age_of_empires/'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        devMiddleware: {
            writeToDisk: true
        },
        historyApiFallback: {
            rewrites: [
                { from: /^\/projects\/age_of_empires\/.*$/, to: '/index.html' }
            ]
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
};