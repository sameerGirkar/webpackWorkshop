const compressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = () => ({
    plugins: [
        new compressionWebpackPlugin()
    ]
})