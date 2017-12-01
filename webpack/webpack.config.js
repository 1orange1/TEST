const  path = require('path');
const  glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const webpack =  require('webpack');
const purifycssWebpack = require('purifycss-webpack');
const entry = require('./webpack-config/entry_webpack');
const copWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry:entry,
  output:{
      path:path.resolve(__dirname,'dist'),
      filename:'[name].js'
  },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                // use:[
                //     {
                //         loader:'style-loader'
                //     },{
                //     loader:'css-loader'
                //     }
                // ]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: [
                        {
                            loader:"css-loader",
                            options:{importLoaders:1}
                        },
                        "postcss-loader"
                    ]
                })
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:50000000,
                        outputPath:'img/'
                    }}
                ]

            },{
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss/,
                    // use:['style-loader'
                    //     ,'css-loader'
                    //     ,'sass-loader'
                    // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },{
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['env']
                    }
                },
                exclude:/node_modules/
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        // new UglifyJsPlugin()
        new purifycssWebpack({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin("成哥所有"),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:"assent/[name].js",
            minChunks:2
        }),
        new copWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:8081,
        compress:true

    }
    watchOptions:{
      poll:1000,
        aggregeateTimeout:500,
        ignoredL:/node_modules/
    }

};