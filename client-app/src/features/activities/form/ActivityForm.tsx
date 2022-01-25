import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: ""
  }

  const [activity, setActivity] = useState(initialState)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    createOrEdit(activity)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
  }

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
          <Input name="title" type="text" value={activity.title} onChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea type="text" name="description" value={activity.description} onChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input type="text" name="category" value={activity.category} onChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="text" name="date" value={activity.date} onChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" name="city" value={activity.city} onChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <FormLabel>Venue</FormLabel>
          <Input type="text" name="venue" value={activity.venue} onChange={handleInputChange}/>
        </FormControl>
        <Button
          type="submit"
          float="right"
          colorScheme={"green"}
          maxWidth={"100px"}
          m={2}
        >
          Create
        </Button>
        <Button
          type="submit"
          float="right"
          colorScheme={"red"}
          maxWidth={"100px"}
          onClick={closeForm}
          m={2}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
}
