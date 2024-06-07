import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";

function NewTodo() {
  const TodosCtx = useContext(TodoContext);
  const inputTextRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      // error
      return;
    }
    TodosCtx.addTodo(enteredText);
    inputTextRef.current!.value = "";
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text </label>
      <input type="text" id="text" ref={inputTextRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
