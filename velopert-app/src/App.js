import React from 'react';
import Hello from './Hello'; // 개발한 컴포넌트 단위 파일 불러오는법
import './App.css'; // css 파일 연결 방법
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList'

function App() {
  const users = [
		{
			id : 1,
			username : 'velopert',
			email : 'public.veloper@gmail.com'
		},
		{
			id : 2,
			username : 'tester',
			email : 'tester@example.com'
		},
		{
			id : 3,
			username : 'liz',
			email : 'liz@example.com'
		},		
	];
  return <UserList users={users}/>;
}

export default App;
