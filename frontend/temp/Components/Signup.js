import React from 'react';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      gender: ""
    };
  };
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, username, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
          </label> {" "}
          <label>
            Username:
            <input
              type="text"
              value={username}
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
          </label> {" "}
          <label>
            Email:
            <input
              type="text"
              value={email}
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </label>
          {" "}
          <label>
            Password:
            <input
              type="password"
              value={password}
              name="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>  {" "}
          <label>
            <input name="gender" type="radio" value="M" /> Male
          </label> {" "}
          <label>
            <input name="gender" type="radio" value="F" /> Female
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
