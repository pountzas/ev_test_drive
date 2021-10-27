import React from 'react';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureStore from './configureStore';

import './App.css';
import Nav from './components/Nav';
import Cars from './components/Cars';
import CarItem from './components/CarItem';
import Appoinment from './components/Appoinment';
import Login from './components/Login';
import AppointmentsPage from './Pages/AppointmentsPage';
import CarPage from './Pages/CarPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
