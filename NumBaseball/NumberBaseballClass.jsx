import React, { Component, createRef } from 'react';
import Try from './Try';

function getNumbers(){
    // 숫자 4개를 중복없이 랜덤하게 뽑는 함수
    const Candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0 ; i< 4 ; i++){
        const chosen = Candidates.splice(Math.floor(Math.random()*(9-i)), 1)[0];
        array.push(chosen);
    }

    return array;
}

class NumberBaseball extends Component{
    state ={
        result :'',
        value : '',
        answer : getNumbers(),
        tries : [],
    };

    shouldComponentUpdate(nextProps, nextState, nextContext){
        // 여깃 nextContext의 역할
        // A => B => C => D ... G 순으로 되어있을 때, 
        // Context를 이용해 A에서 G로 바로 갈 수 있음.
    }

    onSubmitForm = (e) =>{
        const {result, value, tries, answer} = this.state;
        e.prevendDefault();
        // 입력한 값과 정답이 같으면
        if(value === answer.join('')){
            this.setState((prevState) => {
                return {
                    result: '홈런!',
                    tries: [...prevState.tries, { try: value, result: '홈런!' }],
                  }
            })
            alert('게임을 다시 시작합니다.');
            this.setState({
                value : '',
                answer : getNumbers(),
                tries : [],
            });
            this.inputRef.current.focus();
        }else{ // 답이 틀렸으면, 
            const anwerArray = value.split('').map((v)=> parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){ // 10번 이상 틀렸을 때, 
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은 ${answer.join('.')}였습니다.`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value : '',
                    answer : getNumbers(),
                    tries : [],
                });
                this.inputRef.current.focus();
            }else{ // 10 번 이내로 틀렸을 때, 
                for(let i = 0 ; i< 4 ; i ++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                      tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                      value: '',
                    };
                  });
                this.inputRef.current.focus();
            }
        }
        console.log(value);
    };

    onChangeInput = (e) =>{
        console.log(answer);
        this.setState({
            value : e.target.value,
        })
    }

    inputRef = createRef();

    render(){
        // 구조분해 
        const {result, value, tries} = this.state
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        ref={(c)=>{this.onInputRef}} 
                        maxLength={4}
                        value={value}
                        onChange={this.onChangeInput}
                    />
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {/* 3. key로 반복문 하는 방법 : 객체로 */}
                    {tries.map((v, i)=>{
                        return(
                         <Try key={`${i + 1}차시도 : `} tryInfo={v} index={i}/>
                        )
                    })}
                   
                </ul>
            </>
        )
    }
}

export default NumberBaseball;