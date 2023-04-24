import React, { Component } from 'react';
import '../css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="spinning">
          <div className="spining__planet" />
        </div>
        <h1>SISTEMA SOLAR</h1>
      </header>
    );
  }
}
