let proxyObj = {} // 代理对象

proxyObj['/'] = {
    // websocket
    ws: false,
    // 代理目标地址-本地测试
    // target: 'http://localhost:8081',
    // 代理目标地址-虚拟机测试
    target: 'http://192.168.196.131:8081',
    // 发送请求头 host 会被设置 target
    changeOrigin: true,
    // 不重写请求地址
    pathRewrite: {
        '^/': '/'
    }
}

// 在线聊天 代理
proxyObj['/ws'] = {
    ws: true,
    // 代理目标地址-本地测试
    // target: 'ws://localhost:8081'
    // 代理目标地址-虚拟机测试
    target: 'ws://192.168.196.131:8081'
}


// 访问的默认的路径和端口
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj // 代理
    }
}
