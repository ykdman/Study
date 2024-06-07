import React from "react";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  todoId: string;
  removeItemHandler: (id: string) => void;
};

function TodoItem(props: React.PropsWithChildren<TodoItemProps>) {
  return (
    <li
      onClick={() => props.removeItemHandler(props.todoId)}
      className={classes.item}
    >
      {props.children}
    </li>
  );
}

export default TodoItem;
