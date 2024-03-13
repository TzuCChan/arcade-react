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
          class="fox"
          href="http://www.chinatownfair.biz/"
          onClick={GameChanger}
        >
          Chinatown Fair
        </a>
        <a class="fox" href="https://www.os-nyc.com/" onClick={GameChanger}>
          OS NYC
        </a>
        <a class="fox" href="https://acebar.com/" onClick={GameChanger}>
          Ace Bar
        </a>
        <a class="fox" href="https://barcadestmarks.com/" onClick={GameChanger}>
          Barcade (St. Marks)
        </a>
        <a class="fox" href="https://barcadenewyork.com/" onClick={GameChanger}>
          Barcade (24th St)
        </a>
        <a class="fox" href="https://tidalforcevr.com/" onClick={GameChanger}>
          Tidal Force VR
        </a>
      </div>
        );
  }
}

export default App;
