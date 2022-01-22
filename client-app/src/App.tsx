import React, { useState, useEffect } from "react";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { CalendarIcon } from "@chakra-ui/icons";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities/").then((res) => {
      setActivities(res.data);
    });
  }, []);

  return (
    <div>
      
      <Heading><CalendarIcon />{" "}ActivityEve</Heading>

      <UnorderedList>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}

export default App;
