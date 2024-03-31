import { useEffect, useRef } from "react";

import QuizTimer from "./QuizTimer.jsx";

import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/question.js";

export default function Quiz({ selectAnswer, quizIndex, quizIsComplete }) {
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="quiz complete" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  // 문제 섞기
  const shuffleAnswers = [...QUESTIONS[quizIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={quizIndex}
          onTimeout={() => selectAnswer(null)}
          timeout={10 * 1000}
        />
        ;<h2>{QUESTIONS[quizIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer, idx) => (
            <li key={idx} className="answer">
              <button onClick={() => selectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
