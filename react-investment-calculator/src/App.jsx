import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/Userinput";
import Result from "./components/Result";

const initialInvestmentObj = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState({
    ...initialInvestmentObj,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInput} userInputObj={userInput} />
      {!inputIsValid && (
        <p className="center">Please Enter a duration greeter Than 0</p>
      )}
      {inputIsValid && <Result userInputObj={userInput} />}
    </>
  );
}

export default App;
