import React, { Component } from 'react';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],
    text: '',
  };

  render() {
    return (
      <div>
        <h3>Todo-list</h3>
        <TodoList onDelete={this.handleDelete} onCheckItemChange={this.handleCheckItemChange} items={this.state.items} />
        <label htmlFor="new-todo">What needs to be done?</label>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleSubmit}>Add to list</button>
      </div>
    );
  }

  handleDelete = id => {
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItems });
  };

 handleCheckItemChange = id => {
    const {items} = this.state;

    const foundItem = items.find(item => item.id === id);
    foundItem.checked = !!foundItem.checked;

    const filteredItems = items.filter(item => item.id !== id);
    const newItems = [...filteredItems, ...[foundItem]];

    this.setState({items: newItems});
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      checked: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  };
}
