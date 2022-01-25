import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Avatar,
  Image,
  Button,
} from "@chakra-ui/react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
  return (
    <Box
      mt={3}
      w={"full"}
      boxShadow={"base"}
      p={6}
      overflow={"hidden"}
    >
      <Box minHeight={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6}>
        <Image
          minHeight={"210px"}
          src={`/assets/categoryImages/${activity.category}.jpg`}
          layout={"fill"}
        />
      </Box>
      <Stack>
        <Text
          color={"teal.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {activity.category}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {activity.title}
        </Heading>
        <Text color={"gray.500"}>{activity.description}</Text>

        <Button colorScheme={"teal"} maxWidth={"100px"} onClick={() => openForm(activity.id)}>
          Edit
        </Button>

        <Button maxWidth={"100px"} onClick={cancelSelectActivity}>Cancel</Button>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>
            {activity.city}, {activity.venue}
          </Text>
          <Text color={"gray.500"}>{activity.date}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
