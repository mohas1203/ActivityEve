import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const history = useHistory();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!));
    }
  }, [id, loadActivity]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() => {
        history.push(`/activities/${newActivity.id}`);
      });
    } else {
      updateActivity(activity).then(() => {
        history.push(`/activities/${activity.id}`);
      });
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

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
        <LoadingComponent content="Loading Activity..." />
      </div>
    );

  return (
    <Box
      p={5}
      pb={10}
      backgroundColor="white"
      mt={4}
      boxShadow={"base"}
      overflowY="auto"
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            type="text"
            value={activity.title}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            type="text"
            name="description"
            value={activity.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            name="category"
            value={activity.category}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={activity.date}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            value={activity.city}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Venue</FormLabel>
          <Input
            type="text"
            name="venue"
            value={activity.venue}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          type="submit"
          float="right"
          colorScheme={"green"}
          maxWidth={"100px"}
          m={2}
          isLoading={loading}
        >
          Create
        </Button>
        <Button
          as={Link}
          to={"/activities"}
          type="submit"
          float="right"
          colorScheme={"red"}
          maxWidth={"100px"}
          m={2}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
});
