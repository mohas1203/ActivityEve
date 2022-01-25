import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Activity } from "../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}
export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem w="45rem">
        <ActivityList
          submitting={submitting}
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </GridItem>
      <GridItem w="30rem">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            submitting={submitting}
            closeForm={closeForm}
            createOrEdit={createOrEdit}
            activity={selectedActivity}
          />
        )}
      </GridItem>
    </Grid>
  );
}
