import { Grid, GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial)
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
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem w="45rem">
        <ActivityList />
      </GridItem>
      <GridItem w="30rem">
        <h1>Activities Filter</h1>
      </GridItem>
    </Grid>
  );
});
