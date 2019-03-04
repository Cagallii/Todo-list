import React, { Component } from 'react';
import T from 'prop-types';
import {itemType} from './TodoList';

export default class Item extends Component {
  static propTypes = {
  data: itemType,
  onDelete: T.func.isRequired
  };

  render() {
    return <li>{this.props.data.text} <button>Supprimer</button>
    <div onClick={() => this.props.onDelete(this.props.data.id)}> </div>
    </li>
  }
};