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
}

export default App;
