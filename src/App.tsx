import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';

function App() {
  return (
    <div>
      <Nav />
      <div className="container mp-5">
        <BrowserRouter>
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
