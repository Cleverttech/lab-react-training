import React, { Component } from 'react';

class BoxColor extends Component {
  render() {
    console.log(this.props);
    const { r, g, b } = this.props;

    return (
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          width: '400px',
          height: '40px',
        }}
      >
        <p>
          rgb ({r}, {g}, {b})
        </p>
      </div>
    );
  }
}
export default BoxColor;
