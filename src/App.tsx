import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';
import Artistt from './Components/Artist/Artist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container mp-5">
          <Switch>
            <Route path="/artist/:id" component={Artistt} />
            <Route path="/search" component={Search} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
