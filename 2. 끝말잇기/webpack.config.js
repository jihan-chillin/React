const path = require('patj');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 지금은 개발용, 실서비스 할 땐 production
    devtools : 'eval',
    resolve : {
        // extensions 배열 안에 있는 확장자들은 이제 따로 안적어줘도 인식을 해줌
        extensions : ['.js','jsx','css']
    },

    // entry : 입력 ★
    entry : {
        // client.jsx에서 webpack을 이미 불러오기 때문에 app 배열안에 , 'WordRelay.jsx' 적을 필요 없음ㄴ
        app : ['./client']
    }, 

    // output : 출력 ★
    output : {
        // node문법으로 dist라는 폴더를 path로 합쳐줌 
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }
}