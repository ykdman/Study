import Post from "./components/Post";
import { GuidContext } from "./store/GuidContext";
import { useState } from "react";

export default function App() {
  const [userGuid, setUserGuid] = useState("");
  // random generate guid 함수
  function generateGuid() {
    const guid = crypto.randomUUID();
    setUserGuid(guid);
  }

  // GuidContext를 사용하는것을 명시하며 guidCtx에 할당

  return (
    // GuidContext에 접근 가능하도록 자식 컴포넌트들을 모두 감쌌다.
    <GuidContext.Provider value={userGuid}>
      {/* button */}
      <button onClick={generateGuid}>Generate!</button>
      {/* Post */}
      <Post />
    </GuidContext.Provider>
  );
}
