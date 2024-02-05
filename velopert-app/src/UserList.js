import React from "react";

function UserRender ({user}) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>
	)
}

function UserList({users}) { //props로 받은 users 객체
	return (
		<div>
			{users.map(user => (
				<UserRender user={user} key={user.id}/>
			))}
		</div>

	)
}

export default UserList;