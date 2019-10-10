import React, { Component } from "react";
import { connect } from 'react-redux'

import { updateShit } from './actions/another.actions'

import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { BrowserRouter as Router, Switch, Route, Link } 
  from "react-router-dom";

import TestComponent from './components/testComponent'
import Storefront from './components/storefront'


class App extends Component {
  constructor(props){
    super(props)
    //So we can use 'this' keword in the onUpdateUser function
    //We need to do this for every function we define
    this.handleGenericClick = 
      this.handleGenericClick.bind(this)
  }

  handleGenericClick(){
    this.props.updateShit()
  }
  



  //This is the Table of Contents for our app.
  //Unless you know what you're about to break, please don't change them here.
  render() {
    console.log(this.props)
    return(
      <React.Fragment>
        {/* Anything here styles EVERY page */}
        {/* Some of this will need to be protected -- is that part of MVP?? */}

        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/other">Not Home</Link> */}

        <Router>
          <Route exact path="/"/>
          <Route exact path="/profile"/>
          <Route exact path="/profile/nearMe"/>
          <Route exact path="/create/store"/>
          <Route exact path="/create/colllector"/>
          <Route exact path="/storefront" component={Storefront} />
          <Route exact path="/storefront/other"/>

          <Route exact path="/test" component={TestComponent} />
        </Router>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
    another: state.another,
    user: state.user

  })
const mapActionsToProps = {
  updateShit: updateShit
}

export default connect(mapStateToProps, mapActionsToProps)(App)