import React, { Component } from "react"

class Homepage extends Component {
    render() {
        const { handleChange, handleLogin, handleSignUp, login } = this.props
        return (
            <div className="home">
                <div className='home_nav'>
                    <div className="login_menu">
                        <div className="logo">
                            <img src="https://i.imgur.com/m6bz64S.png" />
                            <h1>RoomEase</h1>
                        </div>
                        <div className="login_form">
                            <form onSubmit={handleLogin}>
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="loginUsername"
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="loginPassword"
                                    onChange={handleChange}
                                />
                                <input type="submit" value="login" />
                            </form>
                        </div>
                                <button onClick={login}>REDUX LOGIN</button>
                    </div>
                </div>

                <div className="signup_body">
                    <div className="about_us">
                        <h1>About Us</h1>
                        <p>
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah{" "}
                        </p>
                    </div>
                    <div className="signup_form">
                        <form onSubmit={handleSignUp}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </label>{" "}
                            <label>
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </label>{" "}
                            <label>
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </label>{" "}
                            <label>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </label>{" "}
                            <label>
                                Phone Number:
                                <input
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                />
                            </label>{" "}
                            <label>
                                <input name="gender" type="radio" value="M" />{" "}
                                Male
                            </label>{" "}
                            <label>
                                <input name="gender" type="radio" value="F" />{" "}
                                Female
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage
