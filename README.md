# Velopert Modern React 공부 정리

- [Velopert Modern React](https://react.vlpt.us/)

> ## JSX 기본 규칙

- babel 이 JSX 를 JS 로 변환해준다.
- babel 은 JS 의 문법을 확장해주는 도구
- babel 로 인해 구형 브라우저 에서도 JSX 문법이 JS로 변환되어 사용가능해진다

### - 규칙

- 태그는 여는태그, 닫는태그가 **무조건** 존재해야 한다.

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div> {/*여는 태그 */}
      <Hello /> {/*단독 태그*/}
      <Hello />
      <Hello />
    </div> {/*닫는 태그*/}
  );
}

export default App;
```

- 두개 이상의 태그는 무조건 하나의 태그로 _wrapping_ 되어 있어야한다.

```jsx
// 잘못된 예
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello />
    <div>안녕하세요~!</div>
  )
}

export default App;
// 오류발생
```

```jsx
// 좋은 예
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <div>안녕하세요~!</div>
    </div>
  );
}

export default App;
```

```jsx
// Fragment 사용한 태그 Wraaping
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <> {/*Fragment 여는 태그*/}
      <Hello />
      <div>안녕하세요~!</div>
    </> {/*Fragment 닫는 태그*/}
  );
}

export default App;

// Fragment 는 화면에 보이지 않으며, 렌더링 영역을 차지 하지 않는다.
```

- 변수 사용

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'Hello World!';
  return (
    <div>
      <Hello />
      <div>{name}</div> {/*변수 사용*/}
    </div>
  );
}
```

- 인라인 스타일 사용

  - 인라인 스타일은 객체형태로 작성해야한다.
  - 스타일 속성 명은 camelCase로 작성 되어야 한다.

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'Hello World!';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  }
  return (
    <div>
      <Hello />
      <div>{name}</div> {/*변수 사용*/}
      <div style={style}></div>
    </div>

  );
```

- Class 사용

  - HTML 과 다르게 class 로 설정하지 않고 className 으로 설정 한다.

- 주석

  - {/\*\*/} 으로 주석을 사용

> ## props

- properties 의 줄임말
- 컴포넌트에게 값을 전달할 때 사용

  - App.js

  ```jsx
  import React from 'react';
  import Hello from './Hello';

  function App() {
    return <Hello name="react" />;
  }

  export default App;
  ```

  - Hello.js

  ```jsx
  import React from 'react';

  function Hello(props) {
    return <div>안녕하세요 {props.name}</div>;
  }

  export default Hello;
  ```

  - props 는 객체로 전달되는 것을 확인

  ### - 여러개의 props (feat. 비구조화 할당)

  - App.js

  ```jsx
  import React from 'react';
  import Hello from './Hello';

  function App() {
    return <Hello name="Hello World!" color="red" />;
  }

  export default App;
  ```

  - Hello.js

  ```jsx
  // 방법 1
  import React from 'react';

  function Hello(props) {
    return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
  }

  export default Hello;
  ```

  ```jsx
  // 방법 2
  import React from 'react';

  function Hello({ color, name }) {
    return <div style={{ color: color }}>안녕하세요 {name}</div>;
  }

  export default Hello;
  ```

  ### - defaultProps 값 설정

  - props 가 빈 값이 전달 되었을때
    즉, argument 가 빈 값이 전달되었을때, default 값을 사용

  - Hello.js

  ```jsx
  import React from 'react';

  function Hello({ color, name }) {
    return <div style={{ color: color }}>안뇽 {name}</div>;
  }

  // defaultProps 설정
  Hello.defaultProps = {
    name: '이름없음',
  };

  export default Hello;
  ```

  ### - props.children

  - import 한 태그 의 자식 태그들을 전달할때 사용

  - Wrapper.js

  ```jsx
  import React from 'react';

  function Wrapper(props) {
    const style = {
      border: '2px solid black',
      padding: '16px',
    };
    return <div style={style}>{props.children}</div>;
  }

  export default Wrapper;
  ```

  - App.js

  ```jsx
  import React from 'react';
  import Hello from './Hello';
  import Wrapper from './Wrapper';

  function App() {
    return (
      <Wrapper>
        {/* 전달될 children 은 밑의 Hello 태그 두 개*/}
        <Hello name="react" color="red" />
        <Hello color="pink" />
      </Wrapper>
    );
  }

  export default App;
  ```
