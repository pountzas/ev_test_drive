import React from 'react';
import CarItem from './CarItem';

const Cars = () => (
  <div className="text-center container">
    <h1>EV models</h1>
    <h2>Car List</h2>
    <div>
      <ul className="d-flex">
        <li>
          <CarItem />
        </li>
        <li>
          <CarItem />
        </li>
        <li>
          <CarItem />
        </li>
      </ul>
    </div>
  </div>
);

export default Cars;
