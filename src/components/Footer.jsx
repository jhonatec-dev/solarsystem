import React, { Component } from 'react';
import '../css/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Produzido em março de 2023 por
        {' '}
        <a href="https://jhonatec.com/">Jhonatec</a>
      </div>
    );
  }
}
