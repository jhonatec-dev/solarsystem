import React, { Component } from 'react';
import '../css/Sun.css';
import sunImage from '../images/sun.gif';

export default class Sun extends Component {
  render() {
    return (
      <img className="Sun" src={ sunImage } alt="sun" />
    );
  }
}
