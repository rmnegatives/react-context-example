import React, { Component } from 'react';

class EmptySection extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default EmptySection;
