import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../actions"
import Box1 from "./Box1"
import CustardModal1 from "./CustardModal1"
import CustardModal2 from "./CustardModal2"

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


class Inventory extends Component {

  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
        <div>
        {/*this is a modal for box 1 */}
        <CustardModal1/>
        {/*this is a modal for box 2 */}
        <CustardModal2/>
        </div>





        {/* <p>{JSON.stringify(this.props.user.cards[0].cardName)}</p> */}
        {/* <pre>{JSON.stringify(this.props.user, null, "\t")}</pre> */}


      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCards: () => dispatch(getCards())
//   }
// }


export default connect(mapStateToProps)(Inventory);
