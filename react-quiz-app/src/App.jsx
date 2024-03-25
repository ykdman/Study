import { useState } from "react";
import Header from "../src/components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const selectedAnswerIndex = userAnswers.length;

  function handleSelectedAnswer(answer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }

  return (
    <>
      <Header />
      <Quiz
        selectAnswer={handleSelectedAnswer}
        selectedAnswerIndex={selectedAnswerIndex}
      />
    </>
  );
}

export default App;
