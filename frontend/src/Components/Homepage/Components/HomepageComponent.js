import React, { Component } from "react"
import '../Styles/Homepage.css';


class HomepageComponent extends Component {
  render() {
    const { handleChange, handleLogin, handleSignUp } = this.props;
    return (
      <div className='homepage_container'>
        
        <div className='logo'>
          <img src='https://i.imgur.com/m6bz64S.png' />
          <h2>RoomEase</h2>
        </div>
        <div className='login_form'>
          <form onSubmit={handleLogin}>
            <input type='text' placeholder='username' name='loginUsername' onChange={handleChange} />
            <input type='password' placeholder='password' name='loginPassword' onChange={handleChange} />
            <input type='submit' value='login'/>
          </form>
        </div>

        <div className='about_us'>
          <h1>About Us</h1>
          <p>blah blah blah</p>
        </div>

        <div className='signup_form'>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              placeholder='Full Name'
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder='Username'
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder='Password'
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder='Phone Number'
              onChange={handleChange}
            />
            <input name="gender" type="radio" value="M" /> Male
            <input name="gender" type="radio" value="F" /> Female
            <input className='signup_submit' type='submit' value='Sign Up' />
          </form>
        </div>

      </div>
    )
  }
}

export default HomepageComponent;