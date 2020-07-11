const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_[hash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            minify:{
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name]_[hash:5].css"
        }),
        new CleanWebpackPlugin()
    ],
    mode: "development"
}