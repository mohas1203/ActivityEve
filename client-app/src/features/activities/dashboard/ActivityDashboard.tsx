import {Grid, GridItem} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import React from "react";
import {useStore} from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


export default observer(function ActivityDashboard() {

    const {activityStore} = useStore()
    const {selectedActivity, editMode} = activityStore

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="45rem">
                <ActivityList/>
            </GridItem>
            <GridItem w="30rem">
                {selectedActivity && !editMode && (
                    <ActivityDetails/>
                )}
                {editMode && (
                    <ActivityForm />
                )}
            </GridItem>
        </Grid>
    );
})
