import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Nav from '../components/Nav';

const HomePage = () => {
  const cookies = new Cookies();
  useEffect(() => {
    if (!cookies.get('username')) {
      window.location.href = './';
    }
  });

  return (
    <div>
      <h1>Home Page</h1>
      <Nav />
    </div>
  );
};

export default HomePage;
