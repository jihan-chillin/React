import React, { useState, useRef, useEffect } from 'react';

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

const RSP = () =>{
    const [result, setResult] = useState('');
    const [imgCord, setImgCord] = useState(rspCords.바위);
    const [score, setScore ] = useState(0);
    const interval = useRef();

    useEffect(()=>{ // componentDidMount, componentDidUpdate 역할 but, 1:1 대응 아님
        // console.log('다시 실행');
        interval.current = setInterval(changeHand, 100)
        return () =>{ // componentWillUpdate 역할
            // console.log('실행 종료');
            clearInterval(interval.current);
        }
    }, [imgCord]);

    const changeHand = () =>{
        const {imgCoord} = state;
        if (imgCoord === rspCords.바위) {
        setImgCord(rspCords.가위);
        } else if (imgCoord === rspCords.가위) {
            setImgCord(rspCords.보);
        } else if (imgCoord === rspCords.보) {
            setImgCord(rspCords.바위);
        }
    }

    const onClickBtn = (choice) =>{
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다.');
            setScore((prevScore)=> prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore)=> prevScore + 1);
        }
        setTimeout(() => {
        interval = setInterval(changeHand, 100);
        }, 1000);
    }
    return(
    <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
}

export default RSPHooks;