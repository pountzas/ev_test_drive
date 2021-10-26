import React from 'react'
import axios from 'axios'

const baseUrl = 'https://ev-backend-api.herokuapp.com/users'

class Login extends React.Component {
  state = {
    form:{
        username: ''
    }
  }

  handleChange = async e => {
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
  }

  session = async () => {
    await axios.get(baseUrl, {params: { username: this.state.form.username } })
    .then(res => {
      console.log(res.data)
      return res.data;
    })
    .then(res => {
      if (res.length > 0) {
        let user = res[0]
        // console.log(user)
      }
      else {
        alert('user not found')
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={this.session()}
        >
        Login</button>
      </form>
    )
  }
}

export default Login
