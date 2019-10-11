import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {Alert, Button, 
        Form, FormInput, FormGroup,
        Container, Row, Col,
        Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter
    } from "shards-react";

export default class Storefront extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="container">
                    <p> My component exists</p>
                </div>
            </React.Fragment>
        )
    }
}
