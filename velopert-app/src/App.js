import React from 'react';
import Hello from './Hello'; // 개발한 컴포넌트 단위 파일 불러오는법
import './App.css'; // css 파일 연결 방법

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    <>
      {/* 화면에 보이지 않는 주석 */}

      <Hello
      // 태그 내부의 주석
      />
      <Hello />
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
