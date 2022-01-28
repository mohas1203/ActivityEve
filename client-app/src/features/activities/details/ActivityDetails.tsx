import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Avatar,
  Image,
  Button,
} from "@chakra-ui/react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  if (loadingInitial || !activity)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <LoadingComponent content="Loading..." />
      </div>
    );

  return (
    <Box mt={3} w={"full"} boxShadow={"base"} p={6} overflow={"hidden"}>
      <Box minHeight={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6}>
        <Image
          minHeight={"210px"}
          src={`/assets/categoryImages/${activity.category}.jpg`}
          layout={"fill"}
          width={"full"}
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

        <Button
          as={Link}
          to={`/manage/${activity.id}`}
          colorScheme={"teal"}
          maxWidth={"100px"}
        >
          Edit
        </Button>

        <Button as={Link} to="/activities" maxWidth={"100px"}>
          Cancel
        </Button>
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
});
