import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout }) {
  //타이머 State
  const [remainingTime, setRemainingTime] = useState(timeout);

  // timeout Effect
  useEffect(() => {
    //setup Function
    const timer = setTimeout(onTimeout, timeout);
    // cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
