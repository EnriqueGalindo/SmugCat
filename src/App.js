import React, { Component } from "react";
import { connect } from 'react-redux'
import { updateShit } from './actions/another.actions'
import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  constructor(props){
    super(props)
    //So we can use 'this' keword in the onUpdateUser function
    this.handleGenericClick = 
      this.handleGenericClick.bind(this)
  }
  
  handleGenericClick(){
    this.props.updateShit()
  }
  
  
  render() {
    console.log(this.props)
    return(
      <React.Fragment>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/other">Not Home</Link>

        <Switch>
          <Route exact path="/">
            <p>Ain't that somehin</p>
          </Route>
          
          <Route exact path="/other">
            <p>That's sure something else</p>
          </Route>
        </Switch>
      </Router>

      <Alert>son been breakin sun with ray ban since cave man</Alert>
      <p>I'M READY TO USE THE BACK END APIS!</p>
      <br></br>
      <p 
        onClick={this.handleGenericClick}> 
          CLICK ME 
      </p>
      
      <p>{this.props.another}</p>

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