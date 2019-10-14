import React, { Component } from "react";
import '../App.css'

import { Container, Row, Col, 
    Image, Navbar, NavDropdown, Nav, 
    Jumbotron, InputGroup, FormControl 
    } from 'react-bootstrap';
import {
    Button,
    Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter,
    FormInput, FormRadio
    } from "shards-react";
// import { connect } from "react-redux";

//I'm sure there is a way to do this with import
//but I've gotten it to work this way...
const myModule = require('./imgString')
const imgString = myModule.imgString

export default class Storefront extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { open: false };
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
        <React.Fragment>
            <Container style={{marginBottom: "111.11px"}}>

            <Jumbotron style={{margin: "0px"}}>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling 
                extra attention to featured content or information.</p>
            </Jumbotron>


            <Navbar>
                <Nav className="mr-auto">
                    <Nav.Link href="*">Upcoming</Nav.Link>
                    <Nav.Link href="*">Near Me</Nav.Link>
                    <Nav.Link href="*">All Events</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="*">My Inventory</Nav.Link>
                    <Nav.Link href="*">Search Users</Nav.Link>
                    <Nav.Link href="*">Logout</Nav.Link>
                </Nav>
            </Navbar>
            <hr style={{marginBottom: "111.111px"}}></hr>

            <Row>
                <Col md={4}>
                    <Image src={imgString} roundedCircle style={{border: "2px solid black"}}/>
                </Col>

                <Col md={4}>
                    <small>About</small>
                    <h2>User Name</h2>
                    <br></br>
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>

                <Col md={4}>
                    <FormInput size="lg" placeholder="Search" style={{marginTop: '1.5vh'}}/>

                    <div style={{textAlign: "center", marginTop: "25.75px"}}>
                    <FormRadio inline
                        name="mtg"
                        checked={this.state.selectedSport === "users"}
                        onChange={() => { this.changeSport("users");}}
                    > Users </FormRadio>

                    <FormRadio inline
                    name="mtg"
                    checked={this.state.selectedSport === "cards"}
                    onChange={() => { this.changeSport("cards");}}
                    > Cards </FormRadio>

                    <FormRadio
                    inline
                    name="mtg"
                    checked={this.state.selectedSport === "events"}
                    onChange={() => { this.changeSport("events"); }}
                    > Events </FormRadio>
                    </div>
                </Col>
            </Row>
            
            <hr></hr>
            <h2>Upcoming Events:</h2>
            <br></br>

            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{minWidth: "333px"}}>
                        <CardBody>
                            <CardTitle><h2>Friday Nigh Magic</h2></CardTitle>
                            <p>We play for a pack, box, and set</p>
                            <small>The Card Shop at 777 address st.</small><br></br>
                            <small>Date 09/18/19 at 8:00pm</small>
                        </CardBody>

                        <CardFooter style={{textAlign: 'center'}}>
                            <Button outline theme="success" style={{width: "80%"}}>RSVP</Button>
                        </CardFooter>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr></hr>
            <h2>Events Near You:</h2>
            <br></br>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{minWidth: "333px"}}>
                            <CardBody>
                                <CardTitle><h2>Magicfest Columbus</h2></CardTitle>
                                <p>Offocial WoTC Challenger Schedule</p>
                                <small>The Card Shop at 777 Ohio st.</small><br></br>
                                <small>11/22/18 - 11/24/19</small>
                            </CardBody>

                            <CardFooter style={{textAlign: 'center'}}>
                                <Button outline theme="success" style={{width: "80%"}}>RSVP</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr></hr>
            <h2>All Events:</h2>
            <br></br>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{minWidth: "333px"}}>
                            <CardBody>
                                <CardTitle><h2>Magicfest Phoenix</h2></CardTitle>
                                <p>Offocial WoTC Challenger Schedule</p>
                                <small>The Card Shop at 777 Arizona st.</small><br></br>
                                <small>09/25/19 - 09/27/19</small>
                            </CardBody>

                            <CardFooter style={{textAlign: 'center'}}>
                                <Button outline theme="success" style={{width: "80%"}}>RSVP</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>

            </Container>
        </React.Fragment>
    );
    }
}