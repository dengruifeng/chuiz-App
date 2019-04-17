module.exports = {

    devServer: {
        proxy: {
            '/api': {
                // https://www.smartisan.com
                target: 'https://resource.smartisan.com',
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/test':{
                target:"https://www.smartisan.com",
                pathRewrite: {
                    '^/test': ''
                }
            }
        }
    }
}