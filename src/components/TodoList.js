import React, { Component } from 'react';
import T from 'prop-types';

const item = T.shape({
  text: T.string,
  id: T.number,
});

export default class TodoList extends Component {
  static propTypes = {
    items: T.arrayOf(item),
  };
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    );
  }
}
