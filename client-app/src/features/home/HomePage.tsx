import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Button } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
        ActivityEve.
        </Header>
        <Header as="h2" inverted content="Welcomet to the best Event Manager" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the Events
        </Button>
      </Container>

    </Segment>
  );
}
