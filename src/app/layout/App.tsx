import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { ActivityDashboard } from "../features/components/activities/dashbord/ActivityDashboard";

const App = () => {
  const [activities, setActivites] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivites(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style ={{marginTop: '7em'}}>
        <ActivityDashboard activities = {activities}/>
      </Container>
    </Fragment>
  );
};

export default App;
