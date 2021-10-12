const React = require('react');
const { Module } = require('webpack');
const {Component} = React;

class WordRelay extends React.Component {
    state ={
        text : "hello, webpack",
    };

    render(){
        return <h1>{this.state}</h1>
    }
}

module.exports = WordRelay;