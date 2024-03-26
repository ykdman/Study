import { useState } from "react";

import QUESTION from "./assets/question.js";
import Header from "../src/components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const selectedAnswerIndex = userAnswers.length;

  // Quiz Complete Flag
  const quizIsComplete = QUESTION.length === userAnswers.length;

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
        quizIsComplete={quizIsComplete}
      />
    </>
  );
}

export default App;
