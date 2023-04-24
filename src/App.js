import React from 'react';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import backSound from './images/backSound.mp3';

const song = new Audio(backSound);

// E Aqui começa a jornada para além de meu planeta natal...
class App extends React.Component {
  playSong = () => {
    song.volume = 0.3;
    song.loop = true;
    song.play();
  };

  render() {
    return (
      <div
        className="App"
        onClick={ this.playSong }
        role="button"
        aria-hidden
      >
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
