import React, { Component } from 'react';
import T from 'prop-types';

import Item from './Item';

export const itemType = T.shape({
  text: T.string,
  id: T.number,
});

export default class TodoList extends Component {
  static propTypes = {
    items: T.arrayOf(itemType),
    onDelete: T.func.isRequired,
  };
  render() {
    return (
      <ul>
        {
          this.props.items && Array.isArray(this.props.items) ?
          this.props.items.map(item => <Item onDelete={this.props.onDelete} key={item.id} data={item} />) 
          : 'No items'}
      </ul>
    );
  }
}
