import React, { Component } from 'react'
import M from '../assets/img/Mohaimn.jpg'
import D from '../assets/img/Dawar.png'
import F from '../assets/img/Farnoosh.jpg'
import H from '../assets/img/Hasan.png'
import Footer from './footer'
import {Link} from 'react-router-dom';
import{Jumbotron,Container,Row,Col,Image,Button} from 'react-bootstrap'
class Landing extends Component {
    render () {
        return (
              <Container>
                <Jumbotron>
                  <h2>Welcome to ASK-IT </h2>
                  <p>With ASK-IT you can ask about courses and get answers from friends,Exchange of information respect to all courses in MS(CE) .
                  </p>
                  <Link to ="/register">
                    <Button className="btn-info rounded-pill"> Register Now</Button>
                  </Link>
                </Jumbotron>  
                <Row className="show-grid text-center">
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={M} circle className="profile-pic"/>
                    <h3> Mohaimn</h3>
                    <p> Front-End developer</p>
                  </Col> 
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={D} circle className="profile-pic"/>
                    <h3> Dawar</h3>
                    <p>Front-End developer</p>
                  </Col> 
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={F} circle className="profile-pic"/>
                    <h3> Farnoosh</h3>
                    <p>Back-End developer</p>
                  </Col>  
                  <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={H} circle className="profile-pic"/>
                    <h3>Hasan</h3>
                    <p>Back-End developer</p>
                  </Col> 
                </Row>
                <Footer/>           
              </Container>

        )
    }
}

export default Landing