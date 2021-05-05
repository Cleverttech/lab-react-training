import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Greetings;
