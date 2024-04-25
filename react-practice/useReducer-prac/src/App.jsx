import { useReducer } from "react";

import UserInput from "./components/UserInput";
import UserReducer from "./store/UserReducer";

function App() {
  // const [userCount, setUserCount] = useState([]);
  const [userCount, dispatch] = useReducer(UserReducer, []);
  /**
   * user Count를 증가 시키는 함수
   * @param {string} name
   */
  function handleAddNameCount(name) {
    dispatch({
      type: "add",
      name: name,
    });
  }

  /**
   * user Count를 감소시키는 함수
   * @param {string} name
   */
  function handleSubtractUser(name) {
    dispatch({
      type: "subtract",
      name: name,
    });
  }
  return (
    <>
      <UserInput
        onAddUser={handleAddNameCount}
        onSubtractUser={handleSubtractUser}
      />
      <ul>
        {userCount.map((user) => (
          <li key={user.name}>{`${user.name} : ${user.count}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
