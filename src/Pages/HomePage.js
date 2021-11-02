/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Nav from './Nav';
import Cars from './Cars';

const HomePage = () => {
  const cookies = new Cookies();
  useEffect(() => {
    if (!cookies.get('username')) {
      window.location.href = './';
    }
  });

  return (
    <div className="d-flex">
      <Nav />
      <Cars />
    </div>
  );
};

export default HomePage;
