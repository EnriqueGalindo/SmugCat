import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import Box1 from "./Box1"

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>Box1</Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody style={{ maxHeight: "calc(100vh - 200px)",
    overflowY: "auto" }}><Box1/></ModalBody>
        </Modal>
      </div>
    );
  }
}