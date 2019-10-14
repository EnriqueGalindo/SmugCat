import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class Box2 extends Component {
    render() {
        return (
        <React.Fragment>
            <p>This is your Profile</p>
        </React.Fragment>
    );
    }
}