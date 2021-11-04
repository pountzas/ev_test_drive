import axios from 'axios';
import { ADD_CAR, GET_CARS } from './cars.types';

export const addCar = (data) => ({
  type: ADD_CAR,
  payload: data,
});

export const getCars = (data) => ({
  type: GET_CARS,
  payload: data,
});

export const fetchCars = () => async (dispatch) => {
  const res = await axios.get('https://ev-backend-api.herokuapp.com/cars');
  dispatch(getCars(res.data));
};
