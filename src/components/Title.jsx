import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/Title.css';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
