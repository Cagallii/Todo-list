import React, { Component } from 'react';
import T from 'prop-types';
import { itemType } from './types';

export default class Item extends Component {
  static propTypes = {
    data: itemType,
    onDelete: T.func.isRequired,
    onCheckItemChange: T.func.isRequired,
  };

  render() {
    return (
      <li className="itemList">
      <div>
        <input type="checkbox" checked={this.props.data.checked} onChange={() => this.props.onCheckItemChange(this.props.data.id)}></input>
        {this.props.data.text}
      </div>
      <div className="buttonDelete" onClick={() => this.props.onDelete(this.props.data.id)}>
          X
      </div>
      </li>
    );
  }
}
