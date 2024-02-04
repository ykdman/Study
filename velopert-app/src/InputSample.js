import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // e.target 에서 name 과 value 값 할당
    setInputs({
      ...inputs, // 기존의 inputs 객체 복사
      [name]: value, // name propery의 값을 value롤 할당
      // name이라는 것이 propert key로서 동적 할당 된다.
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name} />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
