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
      </div>
        );
  }
}

export default App;
