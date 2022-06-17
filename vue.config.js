// vue.config.js
const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    outputDir: process.env.outputDir, //输出地址
    assetsDir: 'static', //静态资源文件
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        //配置代理
        proxy: {
            //以'/api'开头的接口会转接到下面的target的ip
            '/api': {
                target: 'http://server.test', // target host
                changeOrigin: true, // needed for virtual hosted sites
                ws: true, // proxy websockets
                pathRewrite: {
                    //路径重写
                    '^/api': '/api/', // rewrite path
                },
                logLevel: 'debug'
            },
            // '/socket.io': {
            //     target: 'http://server.test', // target host
            //     changeOrigin: true, // needed for virtual hosted sites
            //     logLevel: 'debug'
            // }
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@@", resolve("./src/assets"));
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    }
}