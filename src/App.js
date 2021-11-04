import React, { useEffect } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from './redux/cars/cars.actions';
import './App.css';
import Login from './components/Login';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddCarPage from './Pages/AddCarPage';
import RemoveCarPage from './Pages/RemoveCarPage';
import CarPage from './Pages/CarPage';
import AppointmentsPage from './Pages/AppointmentsPage';
import MyAppointments from './components/MyAppointments';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const { carsReducer } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/add-car" component={AddCarPage} />
        <Route exact path="/remove-car" component={RemoveCarPage} />
        {carsReducer.map((data) => (
          <Route key={data.id} path={`/cars/${data.id}`}>
            <CarPage car={data} key={data.id} />
          </Route>
        ))}
        <Route path="/appointments" component={AppointmentsPage} />
        <Route path="/myappointments" component={MyAppointments} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
