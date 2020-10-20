const webpackMerge = require("webpack-merge");
const applyPresets = env => {
    const {presets} = env;
    const mergePresets = presets ? [].concat(...[presets]): [];
    const mergeConfigs = mergePresets.map(
        presetName => require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergeConfigs);
}
module.exports = applyPresets;