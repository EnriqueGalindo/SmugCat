import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Route } from "react-router-dom";
import "./App.css";

import {
  TestComponent,
  LoginPage,
  Inventory,
  Profile,
  Storefront,
  RegisterPage
} from "./components";

import SearchUsers from "./components/SearchUsers";
import SearchedUser from "./components/SearchedUser";
import SearchedUserInventory from "./components/SearchedUserInventory";

class App extends Component {
  //This is the Table of Contents for our app.
  //Unless you know what you're about to break, please don't change them here.
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* Anything here styles EVERY page */}
        {/* <Alert theme="info">son been breakin sun with ray ban since cave man</Alert>
        <p onClick={this.handleGenericClick}> CLICK ME </p>
        <p>{this.props.another}</p> */}

        {/* Some of this will need to be protected -- is that part of MVP?? */}
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/other">Not Home</Link> */}
        <Route exact path="/" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:profileId" component={SearchedUser} />
        <Route
          exact
          path="/profile/:profileId/inventory"
          component={SearchedUserInventory}
        />
        <Route exact path="/profile/nearMe" component={Profile} />
        <Route exact path="/search" component={SearchUsers} />
        <Route exact path="/create/store" />
        <Route exact path="/create/colllector" />
        <Route exact path="/storefront" component={Storefront} />
        <Route exact path="/storefront/other" component={Storefront} />

        <Route exact path="/test" component={TestComponent} />
      </React.Fragment>
    );
  }
}

export default App;
