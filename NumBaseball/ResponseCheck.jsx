import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'wating',
        message : '클릭해서 시작하세요.',
        result : [] // 시간들 저장
    };

    onClickScreen = () =>{
        const {state, message, result} = this.state;
        if(state === 'waiting'){
            this.setState({
                state : 'ready',
                message : '초록색이 되면 클릭하세요.'
            });
            setTimeout(()=>{
                this.state({
                    state : 'now',
                    message : '지금 출발!',
                })
            },Math.floor(Math.random()* 1000)*2000); // 2초 ~ 3초 랜덤
        } else if(state==='ready'){

        }
        else if(state === 'now'){
            
        }
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