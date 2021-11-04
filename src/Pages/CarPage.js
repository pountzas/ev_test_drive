import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const CarPage = (props) => {
  const { car } = props;
  return (
    <div className="responsive-flex">
      <Nav />
      <img className="responsive-car-image" src={car.image} alt="car" />
      <div className="align-self-center text-end pe-5">
        <h1 className="fw-bold">{car.name}</h1>
        <h2>{car.model}</h2>
        <p className="ms-5">{car.description}</p>
        <Link
          to="/appointments"
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
CarPage.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
};
