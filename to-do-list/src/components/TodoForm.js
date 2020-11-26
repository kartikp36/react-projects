import React from "react";

export default class TodoList extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.props.state.text.value);
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          name='text'
          value={this.props.text}
          ref={(c) => (this.props.state.text = c)}
          placeholder='Todo...'
        />
        <button
          type='button'
          onClick={() => {
            this.props.handleSubmit(this.props.state.text.value);
          }}>
          Add todo
        </button>
      </form>
    );
  }
}
