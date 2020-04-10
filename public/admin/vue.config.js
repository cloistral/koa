const vueConfig = {
    lintOnSave: false,
    devServer: {
        port: 8000,
        proxy: 'http://localhost:8888'
    }
};

module.exports =vueConfig
