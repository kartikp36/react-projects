import React from "react";
import TodoForm from "./TodoForm";
import ToggleTodo from "./ToggleTodo";

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);

		// Setting up state
		this.state = {
			userInput: "",
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

	render() {
		return (
			<div>
				<h2>Todo List</h2>
				<TodoForm onSubmit={this.addTodo} />
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
