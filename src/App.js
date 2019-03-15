import React, { Component } from 'react';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],
    text: '',
  };

  render() {
    return (
      <div className="container">
        <h3 className="titre">Todo-list</h3>
        <TodoList onDelete={this.handleDelete} onCheckItemChange={this.handleCheckItemChange} items={this.state.items} />
        <div className="itemCreationContainer">
          <label className="question" htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
        <button className="buttonAdd" onClick={this.handleSubmit}>Add to list</button>
      </div>
    );
  }

  handleDelete = id => {
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItems });
  };

 handleCheckItemChange = id => {
    const {items} = this.state;

    const newItems = items.map(item => {
      if(item.id === id) {
        item.checked= !item.checked;
      }
      return item;
    })

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
