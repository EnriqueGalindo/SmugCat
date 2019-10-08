import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Route from "react-router-dom/Route";
import { setGlobal } from "reactn";
import Switch from "react-router-dom/Switch";
import Home from "../Home";
import Login from "../Login";
import "./App.css";
import withAuth from "../../components/withAuth";
import StoreProfile from "../StoreProfile";
import EditProfile from "../../components/EditProfile";
import CustomerProfile from "../CustomerProfile";

setGlobal({
  storeUser: [
    {
      username: "bob",
      displayName: "bob",
      pictureLocation:
        "https://crystal-cdn1.crystalcommerce.com/photos/6509981/en_skzbNgJr7v.png",
      borderPictureLocation:
        "https://dlair.net/austin/wp-content/uploads/2017/05/mtg-banner-730x280.jpg",
      about: "pew pew"
    }
  ],

  customerUser: [
    {
      username: "boop",
      displayName: "boop",
      pictureLocation:
        "https://crystal-cdn1.crystalcommerce.com/photos/6509981/en_skzbNgJr7v.png",
      borderPictureLocation:
        "https://dlair.net/austin/wp-content/uploads/2017/05/mtg-banner-730x280.jpg",
      about: "you must construct additional pylons"
    }
  ]
});

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/store" component={StoreProfile} />
    <Route exact path="/customer" component={CustomerProfile} />
    <Route exact path="/home" component={withAuth(Home)} />
    <Route exact path="/edit" component={EditProfile} />
  </Switch>
);

export default App;
