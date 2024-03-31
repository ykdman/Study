import QuizLogoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogoImg} alt="React Quiz Logo" />
      <h1>React Quiz App</h1>
    </header>
  );
}
