import React, {Component} from 'react'; 

class App extends Component { 
constructor(props) { 
	super(props); 

	// Setting up state 
	this.state = { 
	userInput : "", 
	list:[] 
	} 
} 

// Display ToDos
toDos

// Set a user input value 
updateInput(value){ 
	this.setState({ 
	userInput: value, 
	}); 
} 

// Add item if user input in not empty 
addItem(){ 
	if(this.state.userInput !== '' ){ 
	const userInput = { 

		// Add a random id which is used to delete 
		id : Math.random(), 

		// Add a user value to list 
		value : this.state.userInput 
	}; 

	// Update list 
    const list = [...this.state.list]; 
	list.push(userInput); 

	// reset state 
	this.setState({ 
		list, 
		userInput:""
	}); 
	} 
} 

render(){ 
	return(
    <> 
    <center>
        
		<h2>TODO LIST </h2>
        <input type="text" ref="userInput" onChange = {item => this.updateInput(item.target.value)} ></input>
        <button onClick = {()=>this.addItem()}> Add ToDo</button>
        <button> Clear all ToDos</button>
    
    </center>
    </>
    ); 
} 
}

export default App; 