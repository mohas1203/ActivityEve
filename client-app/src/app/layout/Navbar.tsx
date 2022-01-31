import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted color="blue" fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          ActivityEve.
        </Menu.Item>
        <Menu.Item as={Link} to="/activities" name="Activities"/>
        <Menu.Item as={Link} to="/errors" name="Errors"/>
        <Menu.Item>
          <Button as={NavLink} to="/createActivity" color="orange" content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>    
  );
}
