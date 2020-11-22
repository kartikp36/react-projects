import React from "react";

export default (props) => (
	<div
		style={{
			textDecoration: props.todo.complete ? "line-through" : "",
		}}>
		<input
			type='checkbox'
			checked={props.todo.complete}
			onClick={props.toggleComplete}></input>

		{props.todo.text}
	</div>
);
