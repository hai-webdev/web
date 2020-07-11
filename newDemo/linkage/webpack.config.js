const path = require("path");
const WebpackDeepScopePlugin = require("webpack-deep-scope-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash:5].bundle.js"
    },
    module:{
        rules: [{
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                require("postcss-cssnext")(),
                                require("cssnano")()
                            ]
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name][hash:5].bundle.css"
        }),
        new CleanWebpackPlugin(),
        new WebpackDeepScopePlugin()
    ],
}