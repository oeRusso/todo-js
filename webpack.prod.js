const HtmlWebPackPlugin   = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'production',
    output:{
        filename: 'main.[hash].js',
        clean: true
    },
    module:{
             rules:[
                        {
                            test: /\.m?js$/,
                            exclude: /node_modules/,
                            use: [
                                'babel-loader'
                            ]
                        },
                        {
                            test: /\.css$/,
                            exclude: /styles\.css$/,
                            use: [
                                'style-loader',
                                'css-loader'
                            ]
                        },
                        {
                            test: /styles\.css$/,
                            use: [
                                MiniCssExtractPlugin.loader,
                                'css-loader'
                            ]
                        },

                        {
                                    test: /\.html$/i,
                                    loader: 'html-loader',
                                    options: {
                                        sources: false,
                                            },
                        },
                        {
                            test: /\.(png|svg|jpg|gif)$/,
                            use:[
                                {
                                    loader: 'file-loader',
                                    options: {
                                        esModule: false
                                    }
                                }
                            ]
                        }

                    ]
           },
    plugins:[

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            title: 'Output Management',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
                    {from: 'src/assets', to: 'assets/'}
                    ]
                    })
        
    ]
}
