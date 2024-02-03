import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  // use State 배열을 반환, 첫번째 : 현재상태, 두번째 : Setter 함수
  // useState(0) 에서의 0은 number의 초기값 세팅이다.
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
