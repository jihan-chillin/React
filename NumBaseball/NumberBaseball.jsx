import React, { useCallback, useState, memo } from 'react';
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

const NumberBaseball = memo(() =>{
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState('');
    const [tries, setTries] = useState('');

const onSubmitForm = (e) =>{
        e.prevendDefault();
        // 입력한 값과 정답이 같으면
        if(value === answer.join('')){
            setResult('홈런!');
            setTries((prevTries)=>{
                return [...prevTries, {try : value, result : '홈런!'}]
            });
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        }else{ // 답이 틀렸으면, 
            const anwerArray = value.split('').map((v)=> parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){ // 10번 이상 틀렸을 때, 
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('.')}였습니다.`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            }else{ // 10 번 이내로 틀렸을 때, 
                for(let i = 0 ; i< 4 ; i ++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                // 옛날 tries로 현재 tries로 만들기 때문에 함수형으로 만들어줘야 함!
                setTries((prevTries)=>[...prevTries, {try : value, result : `${strike}, ${ball}`}]);
                setValue('');            
            }
        }
        console.log(value);
    };

const onChangeInput = useCallback((e)=> setValue(e.target.value),[]);
    return(
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input
                maxLength={4}
                value={value}
                onChange={onChangeInput}
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
});
export default NumberBaseball;