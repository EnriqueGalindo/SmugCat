import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { connect } from "react-redux";

//I'm sure there is a way to do this with import
//but I've gotten it to work this way...
const myModule = require('./imgString')
const imgString = myModule.imgString

export default class Storefront extends Component {
    render() {
        return (
        <React.Fragment>
            <Container class="container" style={{border: "1px solid black", minHeight: "420px"}}>
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