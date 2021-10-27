import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import './App.css';
// import CarItem from './components/CarItem';
// import Appoinment from './components/Appoinment';
import Login from './components/Login';
// import AppointmentsPage from './Pages/AppointmentsPage';
// import CarPage from './Pages/CarPage';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

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
