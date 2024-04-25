import { useContext } from 'react';
import Post from './components/Post';
import { GuidContext } from './store/GuidContext';

export default function App() {
  // random generate guid 함수
  function generateGuid() {
    const guid = crypto.randomUUID();
    return guid;
  }

  // GuidContext를 사용하는것을 명시하며 guidCtx에 할당
  let guidCtx = useContext(GuidContext);

  return (
    // GuidContext에 접근 가능하도록 자식 컴포넌트들을 모두 감쌌다.
    <GuidContext.Provider value={guidCtx}>
      {/* button */}
      <button
        onClick={() => {
          guidCtx = generateGuid();
        }}
      >
        Generate!
      </button>
      {/* Post */}
      <Post />
    </GuidContext.Provider>
  );
}
