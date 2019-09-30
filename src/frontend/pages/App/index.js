import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from '../Home';
import Login from '../Login';
import './App.css';
import withAuth from '../../components/withAuth';

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={withAuth(Home)} />
  </Switch>
);

export default App;
