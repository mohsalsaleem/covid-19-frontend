import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import UnauthorizedLayout from './Components/unauthorized';
import PrimaryLayout from './Components/base';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <Route path="/" component={PrimaryLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
