import React from 'react';
import PropTypes from 'prop-types';
import './CarItem.css';
import SocialIcons from './socialIcons';

const CarItem = (props) => {
  const { car } = props;
  return (
    <div className="green-bg">
      <div className="">
        <img className="img-fluid" src={car.image} alt="carPics" />
        <div className="text">{car.name}</div>
        <p>{car.model}</p>
        <p className="description">{car.description}</p>
      </div>
      <SocialIcons />
    </div>
  );
};

export default CarItem;
CarItem.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
};
