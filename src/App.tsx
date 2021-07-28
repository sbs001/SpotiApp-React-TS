import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="container mp-5">
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
