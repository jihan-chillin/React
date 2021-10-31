import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){
    // 숫자 4개를 중복없이 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component{
    state ={
        result :'',
        value : '',
        answer : getNumbers(),
        tries : [],
    };

    fruits = [
        {fruit : "사과", taste : "맛있다"},
        {fruit : "바나나", taste : "맛앖다"},
        {fruit : "포도", taste : "맛있다"},
        {fruit : "귤", taste : "맛있다"},
        {fruit : "감", taste : "없어서 못먹음"},
        {fruit : "배", taste : "비싸서 못먹음"},
        {fruit : "밤", taste : "구우면 맛있지"},

    ];

    onSubmitForm = () =>{

    };

    onChangeInput = () => {

    };

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {/* 3. key로 반복문 하는 방법 : 객체로 */}
                    {this.fruits.map((v, i)=>{
                        return(
                         <Try key={v.fruit + v.taste} value={v} index={i}/>
                        )
                    })}
                   
                </ul>
            </>
        )
    }
}

export default NumberBaseball;