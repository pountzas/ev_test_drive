import React from 'react';
import PropTypes from 'prop-types';
import './CarItem.css';
import { Link } from 'react-router-dom';
import SocialIcons from './socialIcons';

const CarItem = (props) => {
  const { car } = props;
  return (
    <div className="green-bg border-0">
      <div className="card border-0">
        <img className="card-img-top car-image" src={car.image} alt="carPics" />
        <div className="green-bg">
          <h1 className="fw-bold">
            {car.name}
          </h1>
          <h2>
            {car.model}
          </h2>
          <p className="description">{car.description}</p>
        </div>
      </div>
      <div>
        <Link
          to={`/cars/${car.id}`}
          className="btn btn-secondary mb-2"
          type="button"
        >
          Details
        </Link>
      </div>
      <SocialIcons />
    </div>
  );
};

export default CarItem;
CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
};
