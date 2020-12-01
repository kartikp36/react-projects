import React, { useState } from "react";
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
      created: new Date(),
    });
  };

  const handleAscSort = () => {
    setList([...list].sort((a, b) => a.created - b.created));
  };

  const handleDescSort = () => {
    setList([...list].sort((a, b) => b.created - a.created));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <TodoForm
        {...{ handleSubmit, text, created }}
      />

      <button type='button' className='sort' onClick={handleAscSort}>
        Sort by Oldest
      </button>
      <button type='button' className='sort' onClick={handleDescSort}>
        Sort by Latest
      </button>
      {list.map((todo) => (
        <ToggleTodo key={todo.id} {...{ toggleComplete, todo }} />
      ))}
    </div>
  );
};
