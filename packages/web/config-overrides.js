const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
// const appIncludes = [resolveApp('src'), resolveApp('../components/src')]
const appIncludes = [
    resolveApp('src'),
    resolveApp('../components/src'),
    resolveApp('../mobile/src'),
    resolveApp('../../node_modules/@react-navigation'),
    resolveApp('../../node_modules/react-navigation'),
    resolveApp('../../node_modules/react-native-uncompiled'),
    resolveApp('../../node_modules/react-native-elements'),
    resolveApp('../../node_modules/react-native-gesture-handler'),
    resolveApp('../../node_modules/react-native-ratings'),
    resolveApp('../../node_modules/react-native-screens'),
    resolveApp('../../node_modules/react-native-tab-view'),
    resolveApp('../../node_modules/react-native-vector-icons'),
    resolveApp('../components/libraries/MSALAuthLogin'),
    resolveApp('../../node_modules/react-native-vector-icons'),

]

module.exports = function override(config, env) {
    // allow importing from outside of src folder
    // config.resolve.plugins = config.resolve.plugins.filter(
    //     plugin => plugin.constructor.name !== 'ModuleScopePlugin'
    // )
    // config.module.rules[0].include = appIncludes
    // config.module.rules[1] = null
    // config.module.rules[2].oneOf[1].include = appIncludes
    // config.module.rules[2].oneOf[1].options.plugins = [
    //     require.resolve('babel-plugin-react-native-web'),
    //     require.resolve('@babel/plugin-proposal-class-properties'),
    // ].concat(config.module.rules[2].oneOf[1].options.plugins)
    // config.module.rules = config.module.rules.filter(Boolean)
    // config.plugins.push(
    //     new webpack.DefinePlugin({ __DEV__: env !== 'production' })
    // )
    config.resolve.plugins = config.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
    )

    config.module.rules[0].include = appIncludes
    config.module.rules[1].oneOf[2].include = appIncludes
    config.module.rules[1].oneOf[2].options.plugins.push(
        require.resolve('babel-plugin-react-native-web'),
    )

    config.plugins.push(
        new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
    )
    return config
}
