import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import DashboardContainer from "./Dashboard/Containers/DashboardContainer"
import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./Profile/Containers/ProfileContainer"
import Reuseables from "./Utilities/Reuseables"
import Signup from "./Utilities/Components/Signup";



class Home extends Component {
  render() {
    const { handleChange, handleLogin, handleSignUp } = this.props;
    return (
      <div>

        <div className='login_menu'>
          <div className='logo'>
            <img src='https://i.imgur.com/m6bz64S.png' />
            <h1>RoomEase</h1>
          </div>
          <div className='login_form'>
            <form onSubmit={handleLogin}>
              <input type='text' placeholder='username' name='loginUsername' onChange={handleChange} />
              <input type='password' placeholder='password' name='loginPassword' onChange={handleChange} />
              <input type='submit' value='login'/>
            </form>
          </div>
        </div>



        <div className='signup_body'>
          <div className='about_us'>
            <h1>About Us</h1>
            <p>blah blah blah</p>
          </div>
          <div className='signup_form'>
            <form onSubmit={handleSignUp}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
            />
          </label> {" "}
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChange}
            />
          </label> {" "}
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleChange}
            />
          </label>
          {" "}
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
            />
          </label>  {" "}
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
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
        </div>
      </div>
    )
  }
}

class RoomEaseContainer extends Component {
  constructor() {
    super();

    this.state = {

      // for login
      loginUsername: '',
      loginPassword: '',

      // for signup
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: ''

    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
  }

  handleSignUp = e => {
    e.preventDefault();
  }

  render() {
    const { handleChange, handleLogin, handleSignUp } = this;
    console.log(this.state)
    return (
      <div className="RoomEase">
        <Home handleChange={handleChange} handleLogin={handleLogin} handleSignUp={handleSignUp} />
      </div>
    )
  }
}

export default connect(state => state)(RoomEaseContainer)



// {/* <Reuseables.logoIcon url="https://i.imgur.com/DqjYaRi.png" /> */}
//         <Reuseables.navBar logoUrl="https://i.imgur.com/DqjYaRi.png" logoName="RoomEase" />
//         <h1>RoomEase Container</h1>
//         <Signup />
//         <DashboardContainer />
//         <HomepageContainer />
//         <ProfileContainer />