import React, {Component} from 'react';

class Test extends Component {
    state = {
        counte : 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext){
        // 어떤 경우에 다시 렌더링을 해줘야 하는지 명시해주는 곳
        if(this.state.counter !== nextState.counter){
            return true;
        }
        return false
    }

    onClick = () => {
        this.setState({});
    }

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test;