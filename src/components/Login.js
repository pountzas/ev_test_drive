/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './Login.css';

const baseUrl = 'https://ev-backend-api.herokuapp.com/users';
const signUp = 'https://ev-backend-api.herokuapp.com/signup';
const cookies = new Cookies();
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
      },
    };
  }

  componentDidMount() {
    if (cookies.get('username')) {
      window.location.href = './home';
    }
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        [e.target.name]: e.target.value,
      },
    });
  }

  session = async () => {
    const { form } = this.state;
    await axios.get(baseUrl)
      .then((response) => response.data)
      .then((response) => {
        const res = response.users;
        if (res.find((e) => e.username === form.username.toLowerCase())) {
          alert(`Welcome ${form.username}`);
          cookies.set('username', form.username.toLowerCase(), { path: '/' });
          window.location.href = './home';
        } else {
          const body = { username: form.username.toLowerCase() };
          axios.post(signUp, body)
            .then((response) => response.data)
            .then((response) => {
              cookies.set('username', form.username.toLowerCase(), { path: '/' });
              alert(response.message);
              window.location.href = './home';
            });
        }
      })
      .catch((error) => error);
  }

  render() {
    return (
      <div className="main">
        <p className="sign" align="center">Sign in</p>
        <div className="form1">
          <input
            className="un"
            type="text"
            align="center"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
          <button className="submit" type="submit" align="center" onClick={() => this.session()}>Sign in</button>
        </div>
      </div>
    );
  }
}
export default Login;
