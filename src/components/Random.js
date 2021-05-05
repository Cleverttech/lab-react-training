import React, { Component } from 'react';

class Random extends Component {
  render() {
    const { min, max } = this.props;

    return (
      <div>
        <p>
          Random value n between {min} and {max} = > {this.props.children}
        </p>
      </div>
    );
  }
}

export default Random;
