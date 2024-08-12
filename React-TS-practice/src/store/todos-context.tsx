import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {
    id;
  },
});

function TodosContextProvider(props: React.PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todo 추가 함수
  function addTodoItem(todoText: string) {
    setTodos((prevTodos) => {
      return [...prevTodos, new Todo(todoText)];
    });
  }
  // Todo 삭제 함수
  function removeTodoItem(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  const ctxValue: TodoContextType = {
    items: todos,
    addTodo: addTodoItem,
    removeTodo: removeTodoItem,
  };
  return (
    <TodoContext.Provider value={ctxValue}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodosContextProvider;
