import React from 'react';
import Hello from './Hello'; // 개발한 컴포넌트 단위 파일 불러오는법
import './App.css'; // css 파일 연결 방법
import Wrapper from './Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello color="black" name="Test Text" />
      </Wrapper>
    </div>
  );
}

export default App;
