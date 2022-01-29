import { Button, Form, Segment } from "semantic-ui-react";
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
    return <LoadingComponent content="Loading Activity..." />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          name="title"
          type="text"
          value={activity.title}
          onChange={handleInputChange}
          placeholder="title"
        />

        <Form.TextArea
          type="text"
          name="description"
          placeholder="description"
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input
          type="text"
          name="category"
          placeholder="category"
          value={activity.category}
          onChange={handleInputChange}
        />
        <Form.Input
          type="date"
          name="date"
          placeholder="date"
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input
          type="text"
          name="city"
          placeholder="city"
          value={activity.city}
          onChange={handleInputChange}
        />
        <Form.Input
          type="text"
          name="venue"
          placeholder="venue"
          value={activity.venue}
          onChange={handleInputChange}
        />
        <Button
          content="Submit"
          type="submit"
          floated="right"
          color="blue"
          m={2}
          loading={loading}
        />
        <Button
          as={Link}
          to={"/activities"}
          content="Cancel"
          floated="right"
          color={"red"}
          m={2}
        />
      </Form>
    </Segment>
  );
});
