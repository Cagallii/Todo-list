import React, { Component } from 'react';
import T from 'prop-types';
import { itemType } from './types';

export default class Item extends Component {
  static propTypes = {
    data: itemType,
    onDelete: T.func.isRequired,
  };

  render() {
    return (
      <li>
        {this.props.data.text}
        <button onClick={() => this.props.onDelete(this.props.data.id)}>
          Supprimer
        </button>
      </li>
    );
  }
}
