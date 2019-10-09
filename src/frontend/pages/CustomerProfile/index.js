import { NavLink } from "react-router-dom";
import React from "react";
import { useGlobal } from "reactn";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function CustomerProfile() {
  const [customerUser, setCustomerUser] = useGlobal("customerUser");

  return (
    <Card
      style={{
        textAlign: "center",
        textShadow: "text-shadow: 3px 5px 2px #474747",
        color: "white"
      }}
    >
      <CardImg
        style={{ height: "150px" }}
        variant="top"
        src={customerUser.borderPictureLocation}
      />
      <CardHeader style={{ backgroundColor: "#191970", fontSize: "40px" }}>
        {customerUser.displayName}
      </CardHeader>
      <CardImg
        style={{ width: "300px" }}
        variant="top"
        src={customerUser.pictureLocation}
      />

      <CardBody style={{ backgroundColor: "#5E2D79" }}>
        About:
        {customerUser.about}
      </CardBody>

      <div
        style={{
          backgroundColor: "#5E2D79",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <NavLink to="/edit">
          <Button>Edit</Button>
        </NavLink>
        <Button
        // onClick=
        // {handleDeleteUser}
        >
          Delete
        </Button>

        <div
        // onSubmit={this.handleUploadPicture}
        >
          <div name="picture" type="file" />
          <Button type="submit">Upload Picture</Button>
        </div>
        <div />
      </div>
    </Card>
  );
}
