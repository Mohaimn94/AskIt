import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import{Container,ListGroup,Col,Table} from 'react-bootstrap'
import Footer from './footer'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.identity.first_name,
            last_name: decoded.identity.last_name,
            email: decoded.identity.email
        })
    }

    render () {
        return (
            <Container>
                <ListGroup className="jumbotron mt-5">
                    <Col sm={8} className="mx-auto">
                        <h3 className="text-center">{this.state.first_name} {this.state.last_name}</h3>
                    </Col>
                    <Table striped bordered hover variant="warning" className="col-md-6 mx-auto"> 
                        <tbody>
                        <tr >
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                </ListGroup>
                <Footer/>

            </Container>
        )
    }
}

export default Profile