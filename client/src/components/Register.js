import React, { Component } from 'react'
import { register } from './UserFunctions'
import Footer from './footer'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push('/login')
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h2 mb-3 font-weight-bolder text-center"> Register Now </h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail Address</label>
                                <input type="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password"
                                    className="form-control form-control-lg"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-info btn-block rounded-pill">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />           

            </div>
        )
    }
}

export default Register