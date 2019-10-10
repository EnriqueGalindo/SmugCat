import React, { Component } from 'react'
import {Alert, Button, 
        Form, FormInput, FormGroup,
        Container, Row, Col,
        Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter
    } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class TestComponent extends Component{
    render(){
        return(
            <React.Fragment>

            <div class="container">
            <p>Gonna need to hook the component to state -- map props/actaion to dispatch</p>
            <Alert theme="danger">Testing</Alert>
            <Form>
                <FormGroup>
                    <label htmlFor="#username">Username</label>
                    <FormInput id="#username" placeholder="Username" />
                </FormGroup>
            
                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
            </Form>

            <p>Since we already have users in the db, 
                perhaps this button should just log one of those users in, no matter
                whta we put in the fields?

                For demo we could just put the username and pass in that we want people
                to think we created.
            </p>

            <Button outline theme="success">Re-Rout me!!</Button>
            
            <hr></hr>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader style={ {textAlign : 'center'} }>Card Header</CardHeader>
                            <CardImg src="https://place-hold.it/300x200" />
                            <CardBody>
                                <CardTitle style={ {textAlign: 'center'} }>Card Title</CardTitle>
                                <Container>
                                    <Row style={{textAlign:'center'}}>
                                        <Col><Button theme="info">Buy it!</Button></Col>
                                        <Col><Button theme="success">Sell it!</Button></Col>
                                    </Row>
                                </Container>
                            </CardBody>
                            <CardFooter style={{textAlign : 'center'}}>Card Footer</CardFooter>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardHeader>Location?</CardHeader>
                            <CardImg src="https://media.wizards.com/2019/eld/en_2i5yEcemHB.png" />
                            <CardBody>
                                <CardTitle>$Money</CardTitle>
                                <Button>Buy it!</Button>
                            </CardBody>
                            <CardFooter>Notes?</CardFooter>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardHeader>Looking</CardHeader>
                            <CardImg src="https://place-hold.it/300x200" />
                            <CardBody>
                                <CardTitle>For</CardTitle>
                                <Button>Buy it!</Button>
                            </CardBody>
                            <CardFooter>Ideas</CardFooter>
                        </Card>
                    </Col>

                </Row>

                <hr></hr>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Looking</CardHeader>
                            <CardImg src="https://place-hold.it/300x200" />
                            <CardBody>
                                <CardTitle>For</CardTitle>
                                <Button outline>Buy it!</Button>
                            </CardBody>
                            <CardFooter>Ideas</CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>

            </div>
            </React.Fragment>
        )
    }
}
