/* eslint-disable import/extensions */
/* eslint react/prop-types: 0 */
import React from 'react';
import { Nav } from './Nav';

const CarPage = (props) => {
  const { car } = props;
  return (
    <div className="d-flex">
      <Nav />
      {car.name}
      {car.model}
      {car.description}
      {car.image}
    </div>
  );
};

export default CarPage;
