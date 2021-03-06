const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    //devtool: 'eval-source-map',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        proxy: [{
            context: [
                /* jhipster-needle-add-entity-to-webpack - JHipster will add entity api paths here */
                '/api',
                '/management',
                '/swagger-resources',
                '/v2/api-docs',
                '/h2-console'
            ],
            target: 'http://127.0.0.1:3000',
            secure: false
        },{
            context: [
                '/ws'
            ],
            target: 'ws://127.0.0.1:3000',
            ws: true
        }]
    },
    entry: {
        polyfills: './src/app/polyfills',
        global: './src/content/scss/global.scss',
        sidebar: './src/content/scss/sidebar.scss',
        main: './src/app/app.main'
    },
    output: {
        path: utils.root('dist'),
        filename: 'app/[name].bundle.js',
        chunkFilename: 'app/[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            loaders: 'tslint-loader',
            exclude: ['node_modules', new RegExp('reflect-metadata\\' + path.sep + 'Reflect\\.ts')]
        },
        {
            test: /\.ts$/,
            loaders: [
                'angular2-template-loader',
                'awesome-typescript-loader'
            ],
            exclude: ['node_modules/generator-jhipster']
        },
        {
            test: /\.scss$/,
            loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
            exclude: /(vendor\.scss|global\.scss|sidebar\.scss)/
        },
        {
            test: /(vendor\.scss|global\.scss|sidebar\.scss)/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        { //this rule will only be used for any vendors
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: [/node_modules/]
        },
        {
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader'],
           // loader: 'style-loader!css-loader',
            exclude: /(vendor\.css|global\.css|sidebar\.scss|node_modules)/
        },
        {
            test: /(vendor\.css|global\.css|sidebar\.css)/,
            loaders: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 7000,
            proxy: {
                target: 'http://localhost:9060',
                ws: true
            }
        }, {
            reload: false
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new writeFilePlugin(),
        new webpack.WatchIgnorePlugin([
            utils.root('src/test'),
        ]),
        new WebpackNotifierPlugin({
            title: 'JHipster',
            contentImage: path.join(__dirname, 'logo-jhipster.png')
        })
    ]
});
