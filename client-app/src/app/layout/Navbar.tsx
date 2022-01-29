import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          ActivityEve.
        </Menu.Item>
        <Menu.Item as={Link} to="/activities" name="Activities"/>
        <Menu.Item>
          <Button as={NavLink} to="/createActivity" positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>    
  );
}
