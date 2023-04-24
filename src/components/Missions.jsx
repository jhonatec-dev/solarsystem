import React, { Component } from 'react';
import '../css/Missions.css';
import missionsArray from '../data/missions';
import Footer from './Footer';
import MissionCard from './MissionCard';
import Title from './Title';

export default class Missions extends Component {
  render() {
    return (
      <div
        data-testid="missions"
        className="Missions"

      >
        <Title headline="Missões" />
        <section className="missions__section">
          {missionsArray.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}
