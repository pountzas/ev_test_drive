/* eslint-disable import/extensions */
/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const CarPage = (props) => {
  const { car } = props;
  return (
    <div className="d-flex justify-content-between">
      <Nav />
      <img className="img-float align-self-center" src={car.image} alt="car" />
      <div className="align-self-center text-end pe-5">
        <h1 className="fw-bold">{car.name}</h1>
        <h2>{car.model}</h2>
        <p className="ms-5">{car.description}</p>
        <Link
          to={`/appointments/${car.id}`}
          className="btn btn-secondary"
          type="button"
        >
          Test-Drive
        </Link>
      </div>
    </div>
  );
};

export default CarPage;
