import { useRef } from "react";
import QUESTIONS from "../assets/question.js";

export default function Quiz({ selectAnswer, selectedAnswerIndex }) {
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[selectedAnswerIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[selectedAnswerIndex].answers.map((answer, idx) => (
            <li key={idx} className="answer">
              <button onClick={() => selectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
