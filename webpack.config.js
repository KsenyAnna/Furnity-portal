const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



const filePath = {
    src: {
        script: './assets/js/script.js',
        style: './assets/scss/style.scss',
        icons: './assets/icons/icons.js'
    },
    dist:  './public/'
};

function createJSModule() {
    return {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(swiper|dom7|litepicker)\/).*/],
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      modules: false,
                      useBuiltIns: 'entry',
                      corejs: 3,
                    },
                  ],
                ],
                babelrc: false,
            }
        }
    };
}

function createSCSSModule(isDev) {
    return {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: "css-loader",
            options: {
                sourceMap: isDev,
                url: false
            }
        }, {
            loader: "postcss-loader",
            options: {
                plugins: [
                    autoprefixer()
                ],
                sourceMap: isDev,
            }
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: isDev,
            }
        }]
    };
}

function createSVGIconsModule() {
    return {
        resource: {
            test: /\.svg$/
        },
        issuer: {
            include: /icons\.js$/
        },
        use: [{
            loader: 'svg-sprite-loader',
            options: {
                extract: true,
                spriteFilename: './images/icons/sprite.svg',
                symbolId: filePath => 'icon-' + path.basename(filePath).split(".")[0]
            }
        }, {
            loader: 'svgo-loader'
        }]
    };
}

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development';
    const isProd = !isDev;

    return {
        node: {
            fs: "empty"
        },
        mode: isProd ? 'production' : 'development',
        entry: [
            filePath.src.script,
            filePath.src.style,
            filePath.src.icons
        ],
        output: {
            filename: './js/script.js',
            path: path.resolve(__dirname, filePath.dist)
        },
        devtool: isDev ? 'eval-source-map' : 'none',
        module: {
            rules: [
                createJSModule(),
                createSCSSModule(isDev),
                createSVGIconsModule()
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: './css/style.css'
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    map: {
                        inline: isDev,
                    },
                },
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }]
                },
                canPrint: true
            }),
            new SpriteLoaderPlugin({
                plainSprite: true
            }),
            new CopyWebpackPlugin({
            patterns: [
                {from:'assets/images', to: 'images'},
                {from: 'assets/fonts', to: 'fonts'}
            ],
        }),
        ]
    }
};
