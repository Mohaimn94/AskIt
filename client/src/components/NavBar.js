import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../assets/img/z.png'
class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-dark">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-dark ">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link text-dark">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/forum" className="nav-link text-dark">
                        Forum
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link text-dark">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning rounded">
                <button className="navbar-toggler  border border-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon border border-dark"></span>
                </button>
                <div>
                    <Link to="/" className="nav-link" >
                        <img src={logo} alt="Logo" title="Home" style={{ height: "50px", with: "50px" }} />
                    </Link>
                </div>

                <div className="collapse navbar-collapse justify-content-md-end"
                    id="navbar1">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)