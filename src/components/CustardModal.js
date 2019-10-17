import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Card, CardBody, CardHeader } from "shards-react";
import Box from "./Box"

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
        <Card style={{
          backgroundColor: "#D0D0BD",
          minWidth: "300px"
        }}>
          <CardHeader style={{
            textAlign: "center"
          }}>{this.props.boxName}</CardHeader>
          <CardBody style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button onClick={this.toggle} style={{
              backgroundColor: "#D4848F",
              borderColor: "#4A999C"
            }}>{this.props.boxName}</Button>
          </CardBody>
          <Modal open={open} toggle={this.toggle}>
            <ModalHeader style={{ display: "flex", justifyContent: "center", backgroundColor: "#8B6B89" }}>Cards</ModalHeader>
            <ModalBody
              style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto", backgroundColor: "#8B6B89" }}
            >
              <Box boxName={this.props.boxName}/>
            </ModalBody>
          </Modal>
        </Card>
        
      </div>
    );
  }
}
