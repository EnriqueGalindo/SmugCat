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
  Button,
  ButtonGroup
} from "shards-react";

export default function StoreProfile() {
  const [storeUser, setStoreUser] = useGlobal("storeUser");
  console.log(storeUser);
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
        src={storeUser.borderPictureLocation}
      />

      <CardHeader style={{ backgroundColor: "#191970", fontSize: "40px" }}>
        {storeUser.displayName}
      </CardHeader>
      <CardImg
        style={{ width: "300px" }}
        variant="top"
        src={storeUser.pictureLocation}
      />

      <CardBody style={{ backgroundColor: "#5E2D79" }}>
        About:
        {storeUser.about}
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
