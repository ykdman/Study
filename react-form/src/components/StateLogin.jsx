// TODO : State 하나로 Email, Password, 값 받기
import { useState } from 'react';

export default function Login() {
  const [enteredCredential, setEnteredCrednetial] = useState({
    email: '',
    password: '',
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
    console.log('submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) =>
              handleEnterCredential('email', event.target.value)
            }
            value={enteredCredential.email || ''}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleEnterCredential('password', event.target.value)
            }
            value={enteredCredential.password || ''}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
