const {
    VueLoaderPlugin
} = require('vue-loader');

module.exports = {
    entry:['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        },{
            test: /\.(css|scss)$/,
            use: ['vue-style-loader','css-loader','sass-loader']
        },{
            test: /\.js$/,
            exclude:/node_modules/,
            use: ['babel-loader']
        },{
            test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
            use: [{
                loader: "url-loader",
                options: {
                    name: "dist/assets/[name].[ext]",    
                    context: "src/assets",
                    limit: 5000
                }
            }]
        }
        ]},
        plugins: [
            new VueLoaderPlugin()//分工处理，将对应代码传递给对应模块处理
        ],
    
    devServer: {
        contentBase: './',
        compress: true,
        host: '0.0.0.0',
        port: '20000',
        hot: true,
        inline: true,
        historyApiFallback: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
            aggregateTimeout: 300
        }
    },
};
