import React, { useEffect } from "react";

// user 정보 Render function
function UserRender({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        // onClick={onToggle.bind(null, user.id)}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      &nbsp; <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  //props로 받은 users 객체
  return (
    <div>
      {users.map((user) => (
        // jsx 객체인 UserRender 반환
        <UserRender
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
