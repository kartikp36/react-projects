import React from "react";

export const ToggleTodo = (props) => {
  return (
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}>
      <input
        type='checkbox'
        checked={props.todo.complete}
        onChange={() => {
          props.toggleComplete(props.todo.id);
        }}></input>

      {props.todo.text}
    </div>
  );
};
