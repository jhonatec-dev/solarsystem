import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/PlanetCard.css';

// Modifiquei o nome do arquivo
/* <Planet planetImage={ planetImage } planetName={ planetName } /> */
export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        className={ `${planetName} radius` }
      >
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
