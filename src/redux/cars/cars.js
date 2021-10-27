import { GET_CARS } from './cars.types';

const initialCars = [];

const CarsReducer = (state = initialCars, action) => {
  const carList = [...state];

  switch (action.type) {
    case GET_CARS: {
      const newCars = [...action.payload.cars];
      const filterCars = newCars.map((e) => ({
        id: e.id,
        name: e.name,
        model: e.model,
        image: e.image,
        description: e.description,
      }));
      return [...carList, ...filterCars];
    }
    default:
      return carList;
  }
};

export default CarsReducer;
