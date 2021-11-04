/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import './AddRemoveCarForm.css';

const baseUrl = 'https://ev-backend-api.herokuapp.com/cars';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      model: '',
      description: '',
      image: {},
    };
  }

  onChange = async (e) => {
    e.persist();
    await this.setState(() => ({
      [e.target.name]: e.target.files[0],
    }));
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await this.setState(() => ({
      [e.target.name.name]: e.target.name.value,
      [e.target.model.name]: e.target.model.value,
      [e.target.description.name]: e.target.description.value,
    }));
    const {
      model, name, description, image,
    } = this.state;
    const form = new FormData();
    await form.append('image', image);
    form.append(e.target.name.name, name);
    form.append(e.target.model.name, model);
    form.append(e.target.description.name, description);
    await axios.post(baseUrl, form)
      .then((response) => response.data)
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="form">
        <h1 className="title-new">New Car</h1>
        <form onSubmit={this.onSubmit} className="form1">
          <input type="file" name="image" onChange={this.onChange} className="un" />
          <br />
          <input type="text" name="name" className="un" placeholder="Name" />
          <br />
          <input type="text" name="model" className="un" placeholder="Model" />
          <br />
          <input type="text" name="description" className="un" placeholder="Description" />
          <br />
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}
