import React from "react";

export const TodoForm = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(props.text.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input name='text' ref={(c) => props.setText(c)} placeholder='Todo...' />
      <button
        type='button'
        onClick={() => {
          props.handleSubmit(props.text.value);
        }}>
        Add todo
      </button>
    </form>
  );
};
