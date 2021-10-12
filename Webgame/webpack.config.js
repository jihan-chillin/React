const path = require('path');

module.exports ={
    name : 'word-relay-setting', 
    mode : 'development', // 실서비스 : production, 
    devtool : 'eval', // 빠르게
    resolve : {
        extensions : ['.js', '.jsx']
    },
    entry  : {
        app : ['./client'],
    },

    module : {
        rules : [{
            test : /\.jsx?$/,
            loader : 'babel-loader',
            options : {
                prests : ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },

    output : {
        // 현재 폴더 안에 있는 dist라는 폴더도
        // webpack.config.js 파일의 세팅값이 적용되도록 하는 것
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    },
}