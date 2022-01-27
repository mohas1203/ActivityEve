import React, {useEffect} from "react";
import {Container} from "@chakra-ui/react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import {useStore} from "../stores/store";
import {observer} from "mobx-react-lite"

function App() {
    const {activityStore} = useStore()

    useEffect(() => {
        activityStore.loadActivities();

    }, [activityStore]);


    if (activityStore.loadingInitial)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <LoadingComponent content="Loading..."/>
            </div>
        );
    return (
        <>
            <Navbar/>
            <Container maxW="container.xl">
                <ActivityDashboard />
            </Container>
        </>
    );
}

export default observer(App);
