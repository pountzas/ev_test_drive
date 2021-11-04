import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './AddRemoveCarForm.css';

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
    <div className="form">
      <h1 className="title-new">Remove Car</h1>
      <form onSubmit={onSubmit} id="carform" className="form1">
        <select form="carform" name="select" className="un">
          {
            carsReducer.map((element) => (
              <option key={element.id} value={element.id}>{element.name}</option>
            ))
          }
        </select>
        <button className="submit" type="submit">Remove Car</button>
      </form>
    </div>
  );
};

export default RemoveCarForm;
