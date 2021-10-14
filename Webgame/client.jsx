const React = require('react');
const ReactDom = require('react-dom');

// class가 많아지면,계속 이 과정을 거쳐야 하기 때문에 WordRelay.jsx파일로 분리해준다.
// 그 후, require로 불러올 수 있음.
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'));