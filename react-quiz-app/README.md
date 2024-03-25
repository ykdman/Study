# Issue 1: Header.jsx couldn't be Imported / Exported

### Header jsx 파일이 import, export 되지 않는 상태

- 폴더 구조

  ![alt text](mdimage/image.png)

- App.jsx

  ```jsx
  import { Header } from "./components/Header.jsx";

  function App() {
    return <Header />;
  }

  export default App;
  ```

- Header.jsx

  ```jsx
  import QuizLogoImg from "../assets/quiz-logo.png";

  export default function Header() {
    return (
      <header>
        <img src={QuizLogoImg} alt="React Quiz Logo" />
        <h1>React Quiz App</h1>
      </header>
    );
  }
  ```

- 브라우저 Console

  ![alt text](mdimage/BrowserErroimage.png)

- 해결!

  - App.jsx에서 Header.jsx를 import 할때, Header 컴포넌트가 export default로 모듈화 되었기 떄문에 {} 괄호 감싸기 없이 Header를 호출 했어야 한다.
