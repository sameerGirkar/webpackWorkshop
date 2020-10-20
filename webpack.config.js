const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = (envMode) => require(`./build-utils/webpack.${envMode}`)(envMode);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({mode, presets} /** parameters passed by cammad */ = {mode: "prouction", presets: []}) => {
    console.log("mode =>", mode);
    return webpackMerge(
        {
            mode,
            output: {
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 5000
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [new htmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode),
        presetConfig({mode, presets})
    )

}