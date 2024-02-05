import React, {useRef, useState, useMemo, useCallback} from 'react';

import UserList from './UserList'
import CreateUser from './CreateUser';

function countActiveUsers(users) {
	console.log('활성 사용자 수를 Count 중 ....');
	return users.filter(user => user.active).length;
}

function App() {
	const [inputs, setInputs] = useState({
		username : '',
		email : ''
	});
	const {username, email} = inputs; 
	// inputs (useState) 초기화
	// App 전역 변수

	// func : OnChange : input의 change 에 실행
	const onChange = e => {
		const {name, value} = e.target; // onChange 지역 변수
		setInputs({
			...inputs, //원본 inputs 유지
			[name] : value
		});
	};

  const [users, setUsers ] = useState([
		{
			id : 1,
			username : 'velopert',
			email : 'public.veloper@gmail.com',
			active : false
		},
		{
			id : 2,
			username : 'tester',
			email : 'tester@example.com',
			active : false
		},
		{
			id : 3,
			username : 'liz',
			email : 'liz@example.com',
			active : false
		},		
	]);

	const nextId = useRef(4); // 초기화 4가 current 값이 된다.

	const onCreate = useCallback(() => {
		if(!username || !email) {
			return
		}
		const user = {
			id : nextId.current,
			username,
			email
		}; // user에 추가할 새 객체
		setUsers([...users, user]) // spread 연산자를 통한 불변성 유지
		// 배열에 항목 추가 로직
		setInputs({
			username : '',
			email : ''
		});
		nextId.current += 1;
	}, [users, username, email]
	)
	const onRemove = useCallback(
		id => {
			setUsers(users.filter(user => user.id !== id));
		}, [users]
	) 

	const onToggle = useCallback(
		id => {
			setUsers(
				users.map(user => user.id === id ? {...user, active : !user.active} : user)
			)
		},
		[users]
	)

	const onReset = () => {
		setInputs({
			username : '',
			email : ''
		})
	}

	const activeUserCount = useMemo(() => countActiveUsers(users), [users])
  return (
		<>
		<CreateUser 
			username={username}
			email={email}
			onChange={onChange}
			onCreate={onCreate}
			onReset={onReset}
		/>
		<UserList 
		users={users}
		onRemove={onRemove}
		onToggle={onToggle}
		/>
		<div>활성 사용자 수 : {activeUserCount}</div>
		</>
		
	)
}

export default App;
