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

  > ## 조건부 렌더링

  - 태그 안에 'isSpecial' 속성을 사용

  - App.js

  ```jsx
  import React from 'react';
  import Hello from './Hello'; // 개발한 컴포넌트 단위 파일 불러오는법
  import './App.css'; // css 파일 연결 방법
  import Wrapper from './Wrapper';

  function App() {
    return (
      <>
        <Wrapper>
          <Hello name={'react'} color={'red'} isSpecial={true} />
          <Hello color={'pink'} />
        </Wrapper>
      </>
    );
  }

  export default App;
  ```

  - isSpecial의 값은 {} 안에 들어가 있기 때문에 JS 문법으로 true/false를 할당한다.
  - isSpecial 의 값을 설정하지 않고 <Hello isSpecial/> 로 사용하면, true를 전달한다.

  - Wrapper.js

  ```jsx
  import React from 'react';

  function Hello({ color, name, isSpecial }) {
    return (
      <div style={{ color }}>
        {isSpecial ? <b>*</b> : null}
        {/** 또는 {isSpecial && <b>*</b>} 를 사용하기도 한다. */}
        안녕하세요 {name}
      </div>
    );
  }

  Hello.defaultProps = {
    name: '이름없음',
  };

  export default Hello;
  ```

  - JSX 는 null, false, undefined 를 렌더링 하지 않는다.

> ## useState 를 이용한 Input 상태 관리하기

- InputSample.js

```js
import React, { useState, useRef } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const myRef = useRef(null);

  const textUpdate = (e) => {
    setText(e.target.value);
  };

  const resetText = (e) => {
    setText('');
  };
  return (
    <div>
      <input onChange={textUpdate} ref={myRef} />
      <button onClick={resetText}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
```

- useState 는 세팅할 변수 와 그 변수의 Setter 개념의 함수를 반환한다.

- 코드의 useState를 비구조화 할당하는 부분을 살펴 보자
  ```js
  const [text, setText] = useState('');
  ```
- 이처럼 useState를 통해 세팅할 '**상태**', 그것을 Setter 할수 있는 함수를 반환한다.


> ## useRef 사용

- useRef 를 사용하여 JS 에서 DOM 을 컨트롤 하듯이 jsx내의 DOM을 컨트롤 할 수 있다.

```js
import React, { useState, useRef } from 'react';
// useRef 사용 설정

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef(); //useRef 초기화

  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target; // e.target 에서 name 과 value 값 할당
    setInputs({
      ...inputs, // 기존의 inputs 객체 복사
      [name]: value, // name propery의 값을 value롤 할당
      // name이라는 것이 propert key로서 동적 할당 된다.
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus(); // nameInput (ref) 를 focus
  };

  return (
    <div>
      <input 
      placeholder="이름" 
      name="name"
      onChange={onChange}
      value={name}
      ref={nameInput} // nameInput ref 사용
      />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
        
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

> ## 배열 렌더링
- 객체 배열 과 같은 모체를 통해 새로운 값을 반환하는 함수를 사용해야 한다.
- map, filter 과 같은 고차함수
- React의 개발 정신은, 원본 (props) 를 회손하지 않고 새로운 객체를 반환하는데 있다.

- map 과 같은 함수를 사용할때에는 무조건! jsx 객체를 반환해야 한다.

- UserList.js
```js
import React from "react";

function UserRender ({user}) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>
	)
}

function UserList() { 
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
	return (
		<div>
			{users.map(user => (
				<UserRender user={user} key={user.id}/>
			))}
		</div>

	)
}

export default UserList;

/** 원래 map 은 () => {} 로 callback 함수를반환하지만 React 에서는
 * jsx 객체를 반환하기 위해 () => () 포맷을 사용하여 반환한다.
*/
```

