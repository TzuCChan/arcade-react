import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [width, setWidth] = useState('0%');

  function Game() {
    const openNav = () => {
      setWidth('20%');
    };
    return (
      <div id="icon" onClick={openNav}>
        🎮
      </div>
    );
  }

  function GameChanger() {
    return <div class="container"></div>;
  }

  function List() {
    const closeNav = () => {
      setWidth('0px');
    };

    return (
      <div id="mySidenav" class="sidenav" style={{ width: width }}>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a
          class="F"
          href="http://www.chinatownfair.biz/"
          onClick={GameChanger}
        >
          Chinatown Fair
        </a>
        <a class="F" href="https://www.os-nyc.com/" onClick={GameChanger}>
          OS NYC
        </a>
        <a class="F" href="https://acebar.com/" onClick={GameChanger}>
          Ace Bar
        </a>
        <a class="F" href="https://barcadestmarks.com/" onClick={GameChanger}>
          Barcade (St. Marks)
        </a>
        <a class="F" href="https://barcadenewyork.com/" onClick={GameChanger}>
          Barcade (24th St)
        </a>
        <a class="F" href="https://tidalforcevr.com/" onClick={GameChanger}>
          Tidal Force VR
        </a>
        <a
          class="F"
          href="https://www.daveandbusters.com/"
          onClick={GameChanger}
        >
          Dave and Buster's
        </a>
        <a
          class="F"
          href="https://www.bowlero.com/location/bowlero-times-square"
          onClick={GameChanger}
        >
          Bowlero Times Square
        </a>
      </div>
        );
  }

  return (
    <div className="App">
      <Game />
      <GameChanger />
      <List />
    </div>
  );
}

export default App;
