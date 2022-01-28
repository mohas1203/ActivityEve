import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" shadow="base" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Heading as={NavLink} to="/" bgGradient="linear(to-r, teal.200, blue.500)" bgClip="text">
          ActivityEve.
        </Heading>
        <Box ml={"auto"}>
          <Button as={NavLink} to="/activities" mr={3} colorScheme={"teal"} variant={"outline"}>
            Activities
          </Button>
          <Button as={NavLink} to="/createActivity" colorScheme={"teal"} >
            Create Activity
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
