import React, { Component } from 'react';
import '../css/SolarSystem.css';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Sun from './Sun';
import Title from './Title';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        <section className="Planets">
          { Planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
          <Sun />
        </section>
      </div>
    );
  }
}
