import React from 'react';

export default class AddCarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
    };
  }

  onChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.files[0],
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('image', this.state.image);
    console.log(form)
    fetch('https://ev-backend-api.herokuapp.com/cars', {
      method: 'POST',
      body: form,
    });
  }

  render() {
    return (
      <div className="form">
        <h1>New Upload</h1>
        <form onSubmit={this.onSubmit}>
          <label>Image Upload</label>
          <input type="file" name="image" onChange={this.onChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
