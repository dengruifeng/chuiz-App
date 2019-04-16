module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'https://resource.smartisan.com',
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/test': {
                target: 'https://www.smartisan.com',
                pathRewrite: {
                    '^/test': ''
                }
            }
        }
    }
}