module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '//http://golang.liyangweb.com'
        : '/',
    outputDir: 'dist',

    assetsDir: 'static',
    filenameHashing: true,
    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8081,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null // string | Object
    },
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html"
        },
        default: {
            entry: "src/main.js",
            template: "public/default.html",
        }
    }
}