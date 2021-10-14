// node.js -> 경로 조작을 하기 위해 path를 require
const path = require('path');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 개발용, production : 실서비스
    devtool : 'eval', // 빠르게
    resolve: {
        extensions: ['.js', '.jsx']
      },

    entry : { // 웹팩의 입력 -> 하나의 script파일로 합쳐야하는 client.jsx와 WordRelay.jsx가 입력파일이 됨.
        // client.jsx에서 Wordrelay를 불러오기 때문에 entry에 WordRelay를 넣을 필요 없음 ★
        app : ['./client'] 
    },

    module : {
        rules: [{
            test: /\.jsx?$/,
            loader : 'babel-loader', 
            options : { // 바벨의 옵션을 작성하는 곳
                presets : ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },

    output : { // 웹팩의 출력 -> 두 jsx 파일을 하나로 연결해주는 app.js가 output에 해당됨 
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
    }
};