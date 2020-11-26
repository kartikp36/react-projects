import React from "react";
import TodoForm from "./TodoForm";
import ToggleTodo from "./ToggleTodo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);

    this.state = {
      text: "",
      list: [],
    };
  }

  addTodo(newTodo) {
    this.setState({
      list: [newTodo, ...this.state.list],
    });
  }
  toggleComplete(id) {
    this.setState({
      list: this.state.list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  handleSubmit = (inputText) => {
    this.addTodo({
      id: Math.random(),
      text: inputText,
      complete: false,
    });
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>

        <TodoForm
          onSubmit={this.handleSubmit}
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        {this.state.list.map((todo) => (
          <ToggleTodo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
