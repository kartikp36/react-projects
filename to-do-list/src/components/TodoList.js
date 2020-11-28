import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { ToggleTodo } from "./ToggleTodo";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([newTodo, ...list]);
  };
  const toggleComplete = (id) => {
    setList(
      list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const handleSubmit = (inputText) => {
    addTodo({
      id: Math.random(),
      text: inputText,
      complete: false,
    });
  };

  return (
    <div>
      <h2>Todo List</h2>

      <TodoForm {...{ handleSubmit, text }} />
      {list.map((todo) => (
        <ToggleTodo key={todo.id} {...{ toggleComplete, todo }} />
      ))}
    </div>
  );
};
