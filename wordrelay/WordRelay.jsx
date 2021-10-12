// 컴퍼넌트를 생성할 때마다 npm에서 react를 불러와줘야 함.
const React = require('react');
const { Module } = require('webpack');
const { Component } = React;

class WordRelay extends React.Component{
    state = {
        
    };

    render(){

    }

}

// 컴포넌트를 생성할 때마다 작성해줘야 함.
// 다른 컴포넌트에서 이 컴포넌트를 불러올 수 있도록 하기 위해 
Module.exports = WordRelay;