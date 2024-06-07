import React, { useContext } from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todos-context.tsx";

// FC는 Function COmponent => 함수형 컴포넌트를 의미한다.
function Todos(props: React.PropsWithChildren) {
  const TodosCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {TodosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoId={item.id}
          removeItemHandler={TodosCtx.removeTodo}
        >
          {item.text}
        </TodoItem>
      ))}
      {props.children}
    </ul>
  );
}

export default Todos;
