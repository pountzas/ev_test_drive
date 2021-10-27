import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const { carReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div className="d-flex">
      <Nav />
      <Cars cars={carReducer} />
    </div>
  );
};

export default HomePage;
