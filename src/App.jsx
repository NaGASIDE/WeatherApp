import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddCity } from './components/Pages/AddCity/AddCity';
import { Home } from './components/Pages/Home/Home';
import { FiveDaysTemp } from './components/Pages/FiveDaysTemp/FiveDaysTemp'
import { AQIPage } from './components/Pages/AQIPage/AQIPage'
import './App.sass';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route  path='/aqi' component={AQIPage} />
          <Route path="/add-city" component={AddCity} />
          <Route path="/five-days" component={FiveDaysTemp} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
