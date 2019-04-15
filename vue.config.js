module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'https://resource.smartisan.com',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}