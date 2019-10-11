import React, { Component } from "react";
import { Button } from 'react-bootstrap';
// import { connect } from "react-redux";



export default class Storefront extends Component {
    render() {
        return (
        <React.Fragment>
            <Button>Yay!</Button>
            <p>This is your Storefront</p>
            <p>This is your Storefront</p>
            <p>This is your Storefront</p>
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