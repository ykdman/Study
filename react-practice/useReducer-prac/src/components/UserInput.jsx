import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function UserInput({ onAddUser, onSubtractUser }) {
  const inputText = useRef("");
  return (
    <div className="user-input">
      <input type="text" ref={inputText} />
      <button
        onClick={() => {
          onAddUser(inputText.current.value);
        }}
      >
        Add
      </button>
      <button onClick={() => onSubtractUser(inputText.current.value)}>
        Subtract
      </button>
    </div>
  );
}
