import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
// import { connect } from "react-redux";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'



export default class Storefront extends Component {
    render() {
        return (
        <React.Fragment>

        <Jumbotron fluid style={{backgroundColor: 'lightBlue'}}>
            <p>This is your Storefront</p>
        </Jumbotron>
        <Container>

            <Row>
                <Col style={{
                    height: "300px", 
                    minWidth: "300px",
                    border: "1px solid blue"
                }}>
                <div style={{
                    minHeight: "100%",
                    minWidth: "100%",
                    border: "1px solid black",
                    borderRadius: "50%"
                }}>
                    
                
                </div></Col>
                <Col style={{
                    border: "1px solid blue"
                }}>
                    This is Col 2
                </Col>
                
                <Col style={{
                    border: "1px solid blue"
                }}>
                    This is Col 3
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