// TODO : State 하나로 Email, Password, 값 받기
import { useState } from "react";
import UserInput from "./UserInput.jsx";

export default function StateLogin() {
  const [enteredCredential, setEnteredCrednetial] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleEnterCredential(identifier, value) {
    setEnteredCrednetial((prevCredential) => ({
      ...prevCredential,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log("submitted");
  }

  function handelInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  const emailIsInvalid =
    didEdit.email && !enteredCredential.email.includes("@");

  const passwordIsInvalid =
    didEdit.password && enteredCredential.password.length < 6;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <UserInput
          label="email"
          id="email"
          type="email"
          name="email"
          value={enteredCredential.email}
          onChange={(event) =>
            handleEnterCredential("email", event.target.value)
          }
          onBlur={() => handelInputBlur("email")}
          error={emailIsInvalid && "please Enter valid Email"}
          required
        />
        <UserInput
          label="password"
          id="password"
          type="password"
          name="password"
          value={enteredCredential.password}
          onChange={(event) =>
            handleEnterCredential("password", event.target.value)
          }
          onBlur={() => handelInputBlur("password")}
          error={passwordIsInvalid && "please Enter valid password"}
          required
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
