import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';

const baseUrl = 'https://ev-backend-api.herokuapp.com/users'
const signUp= 'https://ev-backend-api.herokuapp.com/signup'
const cookies = new Cookies();

class Login extends React.Component {
  state = {
    form: {
      username: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  session = async () => {
    await axios.get(baseUrl)
      .then(response => {
        return response.data;
      })
      .then(response => {
        const res = response.users;
        if (res.find(e => e.username === this.state.form.username.toLowerCase())) {
          alert(`Welcome ${this.state.form.username}`);
          cookies.set('username', this.state.form.username.toLowerCase(), {path: "/"});
          window.location.href="./home";
        } else {
          const body= { username: this.state.form.username.toLowerCase() };
          axios.post(signUp, body)
          .then(response => {
            return response.data;
          })
          .then(response => {
            cookies.set('username', this.state.form.username.toLowerCase(), {path: "/"});
            alert(response.message)
            window.location.href="./home";
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    if(cookies.get('username')){
        window.location.href="./home";
    }
  }


  render() {
    return (
      <div>
        <label>User: </label>
        <br />
        <input
          type="text"
          className="form-control"
          name="username"
          onChange={this.handleChange}
        />
        <button onClick={() => this.session()}>Login</button>
      </div>
    )
  }
}

export default Login
