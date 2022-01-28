import { Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Container mt={"3em"}>
      <Heading>Home page</Heading>
      <Text fontSize={"2xl"}>Go to <Link as={RouteLink} to="/activities">Activities</Link></Text>
    </Container>
  );
}
