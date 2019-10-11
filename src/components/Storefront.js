import React, { Component } from "react";
import { Container, Row, Col, Image, Navbar, NavDropdown, Nav, Jumbotron } from 'react-bootstrap';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
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
            <Container class="container">

            <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling 
            extra attention to featured content or information.
            </p>
            </Jumbotron>






            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>


            <Row>
            <Col md={4}>
            <Image src={imgString} roundedCircle />
            </Col>
            <Col md={4}>
            <p>This will be blank.</p>
            </Col>
            <Col md={4}>
            <p>This will be a search</p>
            </Col>
            </Row>

            <Row>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            </Row>
            
            <Row>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ maxWidth: "300px" }}>
            <CardBody>
            <CardTitle><Button>ImgOfCardOnHover</Button></CardTitle>
            <p>Perhaps something about the card or that shaved ape</p>
            </CardBody>
            <CardFooter>
            <Button>Buy</Button>
            <Button>Sell</Button>
            </CardFooter>
            </Card>
            </Col>
            </Row>


            </Container>
        </React.Fragment>
    );
    }
}


// const mapStateToProps = state => {
//   return {
//     user: state.auth.login
//   };
// };

// export default connect(mapStateToProps)(Inventory);