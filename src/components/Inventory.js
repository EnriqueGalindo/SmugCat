import React, { Component } from "react";
import { connect } from "react-redux";
import CustardModal from "./CustardModal"

// import {} from "shards-react";
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { differenceInCalendarQuarters } from "date-fns";


class Inventory extends Component {
  getBoxes() {
    const boxNames = []
    this.props.user.cards.forEach(card => {
      card.locations.forEach(location =>{
        if(boxNames.includes(location.location)){//no operation
        }
        else{
          boxNames.push(location.location)
        }
      })
    });
    return boxNames
  }
  // componentDidMount() {
  //   this.props.getCards();
  // }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.getBoxes().map(boxName => {
            return <CustardModal boxName={boxName}/>
          })}
        {/* this is a modal for box 1
        <CustardModal1/>
        {/*this is a modal for box 2 
        <CustardModal2/> */}
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

export default connect(mapStateToProps)(Inventory);
