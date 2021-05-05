import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    console.log(this.props.lang);

    if (this.props.lang === 'de') {
      return <div>{<p>Hallo {this.props.children}</p>}</div>;
    } else if (this.props.lang === 'fr') {
      return <div>{<p>Bonjour {this.props.children}</p>}</div>;
    }
  }
}
export default Greetings;
