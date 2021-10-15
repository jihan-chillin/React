const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    mode : 'development',
    devtool : 'eval', // production mode일 땐, hidden-source-map
    resolve : {
        extensions : ['.jsx', '.js']
    },
    entry : {
        app : './client'
    },
    module : {
        rules : [{
            test : /\jsx?$/,
            loader : 'babel-loader',
            options : {
                presets : [
                    ['@babel/preset-env', {
                        targets : {
                            browsers : ['> 5% in KR','last 2 chrome versions'], //이전 chrome 버전도 호환가능
                        },
                    }], 
                    '@babel/preset-react',
                ],
                plugins : ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    // plugins : [
    //     // loader의 옵션으로 debug를 true화
    //     new webpack.LoaderOptionsPlugin({debug : true}),
    // ],
    output : {
        filename : 'app.js',
        path : path.join(__dirname, 'dist')
    },
};