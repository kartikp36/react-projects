import React from 'react'; 
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component{
   
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
                list: [...this.state.list, newTodo]
            });
		}
    
    render(){
        return <div>
            <h2>Todo List</h2>
            <TodoForm onSubmit={this.addTodo} />
            {JSON.stringify(this.state.list)}

{/* {this.list.map(note => (
<p>{note.value}</p>
))}; */}

        </div>
    }
}
