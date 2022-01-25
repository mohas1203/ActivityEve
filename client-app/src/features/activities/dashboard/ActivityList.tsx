import { Box, Stack, Text, Heading, Avatar, Button } from "@chakra-ui/react";
import React, { SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}
export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState('');

  const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
   setTarget(event.currentTarget.name) 
   deleteActivity(id)
  }

  return (
    <>
      {activities.map((activity) => (
        <Box
          bgColor="white.200"
          key={activity.id}
          shadow="base"
          m={2}
          w={"full"}
          p={6}
          overflow={"hidden"}
        >
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

            <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
              {activity.title}
            </Heading>
            <Text color={"gray.500"}>{activity.description}</Text>
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
          <Button
            onClick={() => selectActivity(activity.id)}
            colorScheme={"teal"}
            width={"100px"}
            float="right"
          >
            View
          </Button>
          <Button
            onClick={(e) => handleActivityDelete(e, activity.id)}
            colorScheme={"red"}
            width={"100px"}
            float="right"
            name={activity.id}
            isLoading={submitting && target === activity.id}
            mr={2}
          >
            Delete
          </Button>
        </Box>
      ))}
    </>
  );
}