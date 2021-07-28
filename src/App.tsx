import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <div className="container mp-5">
      <BrowserRouter>
        <Route path="/" component={Home}/>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
