import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import Nav from '../components/Nav';
import { fetchCars } from '../redux/cars/cars.actions';
import Cars from '../components/Cars';

const HomePage = () => {
  const cookies = new Cookies();
  useEffect(() => {
    if (!cookies.get('username')) {
      window.location.href = './';
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div className="d-flex">
      <Nav />
      <Cars />
    </div>
  );
};

export default HomePage;
