const path = require('path');

module.exports = {
    name : 'word-relay-setting', // 불필요하지만 webpack 설정을 위한 이름
    mode : 'development', // 지금은 개발용, 실서비스 할 땐 production
    devtool : 'eval', // build 빠름 / rebuild가 가장 바름 ( 최대 성능을 갖춘 개발 빌드를 위한 옵션 )
    resolve : {
        // extensions 배열 안에 있는 확장자들은 이제 따로 안적어줘도 인식을 해줌
        extensions: ['.js', '.jsx'],
    },

    // entry : 입력 ★
    entry : {
        // 중요! ★
        // client.jsx에서 webpack을 이미 불러오기 때문에 app 배열안에 , 
        // 'WordRelay.jsx' 적을 필요 없음ㄴ
        app : ['./client']
    }, 

    // output : 출력 ★
    output : {
        // node문법으로 dist라는 폴더를 path로 합쳐줌 
        path : path.join(__dirname+ 'dist'),
        filename : 'app.js',
        publicPath : '/dist',
    },

    // module : {
    //     loader : 'babel',
    //     query : {
    //         presets : ['react', 'es20cle15']
    //     }
    // }
}