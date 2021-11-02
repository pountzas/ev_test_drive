import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const baseUrl = 'https://ev-backend-api.herokuapp.com/cars';

const RemoveCarForm = () => {
  const { carsReducer } = useSelector((state) => state);
  const onSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.select.value;
    await axios.delete(`${baseUrl}/${id}`);
    window.location.href = './home';
  };

  return (
    <div>
      <h1>Remove Car</h1>
      <form onSubmit={onSubmit} id="carform">
        <label htmlFor="car-id">
          Car name
          <select form="carform" name="select">
            {
              carsReducer.map((element) => (
                <option key={element.id} value={element.id}>{element.name}</option>
              ))
            }
          </select>
        </label>
        <button type="submit">Remove Car</button>
      </form>
    </div>
  );
};

export default RemoveCarForm;
