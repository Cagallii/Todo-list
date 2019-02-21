import React, { Component } from 'react';
import T from 'prop-types';

export default class Item extends Component {
  static propTypes = {
    text: T.string.isRequired,
  };

  render() {
    return <li>{this.props.text}</li>;
  }
}
