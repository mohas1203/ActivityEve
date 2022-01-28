import { Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  inverted?: boolean;
  content?: string;
}

export default function LoadingComponent({
  content = "loading...",
}: Props) {
  return (
    <Stack>
      <Spinner size={"lg"} color={"teal"} />
      <Text fontSize={"md"}>{content}</Text>
    </Stack>
  );
}
