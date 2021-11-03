import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'wating',
        message : '클릭해서 시작하세요.',
        result : [] // 시간들 저장
    };

    onClickScreen = () =>{

    };

    renderAverage = () =>{
        const {result} = this.state;
        this.state.result.length === 0 
            ? null
            : <div>평균시간 : {result.reduce((a, c) => a + c)/ result.length}ms</div>
    }

    render() {
        const {state, message} = this.state;
        return(
           <>
             <div 
            id="screen"
            className={state}
            onClick={this.onClickScreen}
            >
                {message}
            </div>
            {/* {this.state.result.length === 0 
            ? null
            : <div>평균시간 : {this.state.result.reduce((a, c) => a + c)/this.state.result.length}ms</div>
            } */}
            {this.renderAverage()}

            
           </>
        )
    }
}

export default ResponseCheck;