import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div className="container mp-5">
        <Home />
      </div>
    </div>
  );
}

export default App;
