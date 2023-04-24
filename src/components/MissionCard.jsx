import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="MissionCard">
        <h3 data-testid="mission-name">{name}</h3>
        <p data-testid="mission-year">
          Ano:
          {' '}
          {year}
        </p>
        <p data-testid="mission-country">
          País:
          {' '}
          {country}
        </p>
        <p data-testid="mission-destination">
          Destino:
          {' '}
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
