import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="NavBar">
        <img height="50px" width="50px" src={this.props.logoUrl} />
        <span> {this.props.logoName} </span>
        <form onSubmit={this.handleSubmit}>
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
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NavBar;
