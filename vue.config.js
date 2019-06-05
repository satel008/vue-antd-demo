module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true // fix import the antd theme, webpack build show .bezierEasingMixin error // https://github.com/ant-design/ant-design/issues/7927
            }
        }
    },
    devServer: {
        before: require('./.mock')
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }
}
