import React from 'react';
import PropTypes from 'prop-types';

const CarItem = (props) => {
  const { car } = props;
  return (
    <div className="card">
      <div className="">
        <img className="img-fluid" src={car.image} alt="carPics" />
        <div className="text">{car.name}</div>
        <p>{car.model}</p>
        <p>{car.description}</p>
      </div>
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
