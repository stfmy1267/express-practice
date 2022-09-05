const path = require('path');
// cssをファイルのバンドル＆作成するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// htmlファイルにcssを自動で書き込んでくれるプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');
// distディレクトリを整理整頓するプラグイン{}はこの中のこの部分だけ使いますよの宣言
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'javascript/main.js',
        publicPath: 'auto',
    },

    module: {
        rules: [
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        // htmlの中にスタイルシートを差し込む
                        // loader: 'style-loader'
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        // cssをjsに読み込む
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            // 画像
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]',
                },
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         esModule: false,
                    //         // ファイル名の指定
                    //         name: 'images/[name].[ext]',
                    //     },
                    // },
                ],
            },
            {
                // .pugファイルのみを抽出
                test: /\.pug/,
                use: [
                    // htmlをバンドル
                    {
                        loader: 'html-loader',
                    },
                    {
                        // pugをhtmlにバンドル
                        loader: 'pug-html-loader',
                        // 見やすくするオプション
                        options: {
                            pretty: true,
                        },
                    },
                ],
            },
        ],
    },
            plugins: [
        // プラグインのインスタンス化
        new MiniCssExtractPlugin({
            // 出力ファイル名の指定
            filename: './stylesheets/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/template/access.pug',
            filename: 'access.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/template/members/taro.pug',
            filename: 'members/taro.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
