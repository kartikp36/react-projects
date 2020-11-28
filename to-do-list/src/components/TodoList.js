import React, { useState } from "react";
import { render } from "react-dom";
import { TodoForm } from "./TodoForm";
import { ToggleTodo } from "./ToggleTodo";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [created, setCreated] = useState("");
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
      created: new Date().toLocaleTimeString(),
    });
  };

  const handleSort = () => {
    let sortedList = list.sort(
      (a, b) =>
        Date.parse(new Date(a.created.split(":").reverse().join("-"))) -
        Date.parse(new Date(b.created.split(":").reverse().join("-")))
    );
    sortedList.reverse();
    console.log(sortedList);
    setList(sortedList);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <TodoForm {...{ handleSort, handleSubmit, text, created }} />
      {list.map((todo) => (
        <ToggleTodo key={todo.id} {...{ toggleComplete, todo }} />
      ))}
    </div>
  );
};
