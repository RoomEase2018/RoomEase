import React, { Component } from "react"

class HomepageComponent extends Component {
    render() {
        const { handleChange, handleLogin, handleSignUp, login } = this.props
        return (
            <div className="home">
                <div className="home_nav">
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
                        {/* <button onClick={login}>LOGIN</button> */}
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
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                placeholder="Username"
                            />
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                name="email_confirm"
                                onChange={handleChange}
                                placeholder="Re-Enter Email"
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                placeholder="Phone Number"
                            />
                            <label className="form_gender">
                                <input name="gender" type="radio" value="M" />{" "}
                                Male {" "}
                                <input name="gender" type="radio" value="F" />{" "}
                                Female
                            </label>{" "}
                            <div className="form_gender">
                            </div>
                            <button>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomepageComponent
