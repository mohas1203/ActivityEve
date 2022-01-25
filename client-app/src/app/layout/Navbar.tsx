import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface Props{
  openForm: () => void;
}

export default function Navbar({openForm}: Props) {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" shadow="base" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Heading bgGradient="linear(to-r, teal.200, blue.500)" bgClip="text">
          ActivityEve.
        </Heading>
        <Box ml={"auto"}>
          <Button mr={3} colorScheme={"teal"} variant={"outline"}>
            Activities
          </Button>
          <Button colorScheme={"teal"} onClick={openForm}>Create Activity</Button>
        </Box>
      </Flex>
    </Flex>
  );
}
