import React from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  Nav,
  NavItem,
  NavLink
} from "shards-react";
import { Link } from "react-router-dom";
import { useGlobal } from "reactn";

export default function EditProfile(displayName, password, about) {
  const [customerUser, setCustomerUser] = useGlobal("customerUser");

  let userObject = customerUser.find(
    customerUser => customerUser.displayName == displayName
  );

  let userObjectIndex = customerUser.indexOf(userObject);

  const handlePasswordInput = e => {
    let newCustomerUser = [];

    for (user in customerUser) {
      if (user === userObject) {
        user.password = e.target.value;
      }
      newCustomerUser.push(user);
    }

    setCustomerUser({
      customerUser: newCustomerUser
    });
  };

  const handleDisplayNameInput = e => {
    let newCustomerUser = [];

    for (user in customerUser) {
      if (user === userObject) {
        user.displayName = e.target.value;
      }
      newCustomerUser.push(user);
    }

    setCustomerUser({
      customerUser: newCustomerUser
    });
  };

  const handleAboutInput = e => {
    let newCustomerUser = [];

    for (user in customerUser) {
      if (user === userObject) {
        user.about = e.target.value;
      }
      newCustomerUser.push(user);
    }

    setCustomerUser({
      customerUser: newCustomerUser
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Nav justified style={{ backgroundColor: "#9267B3" }}>
        <NavItem>
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Profile</NavLink>
        </NavItem>
      </Nav>

      <Form
        className="editProfileUser"
        onSubmit={handleSubmit}
        style={{ width: "500px", textAlign: "center" }}
        justified
      >
        <FormGroup>
          <label>Change display name</label>
          <FormInput
            type="text"
            name="displayName"
            placeholder="Enter New Store Name"
            onChange={handleDisplayNameInput}
          />
        </FormGroup>
        <FormGroup>
          <label>Update About</label>
          <FormInput
            type="text"
            name="about"
            placeholder="Enter About"
            onChange={handleAboutInput}
          />
        </FormGroup>
        <FormGroup>
          <label>Change Password</label>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter New Password"
            onChange={handlePasswordInput}
          />
        </FormGroup>
        <Button theme="secondary" type="submit">
          Submit Change
        </Button>

        <Link to="/store">
          <Button theme="secondary">back to homepage</Button>
        </Link>
      </Form>
    </>
  );
}
