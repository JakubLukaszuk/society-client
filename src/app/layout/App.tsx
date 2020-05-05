import React, { useEffect, Fragment, FC, useState } from "react";
import { connect } from "react-redux";
import { Container, Flag } from "semantic-ui-react";

import { IDataState, IActivity } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { ActivityDashboard } from "../features/components/activities/dashbord/ActivityDashboard";
import {fetchActiviteis} from "../actions/DataActions";

interface IProps extends IDataState{
  onFetchActivities: () => Promise<void>;
}

const App: FC<IProps> = ({activities, onFetchActivities}) => {
const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
const [editMode, setEditMode] = useState(false);

const handleSelectActivity = (id: string) =>{
  setSelectedActivity(activities.filter(a => a.id === id)[0])
}
  useEffect(()=>{
    onFetchActivities();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style ={{marginTop: '7em'}}>
        <ActivityDashboard activities = {activities}
        selectActivity = {handleSelectActivity}
        selectedActivity = {selectedActivity}
        editMode={editMode}
        setEditMode={setEditMode}/>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: IDataState) => {
  return{
    activities: state.activities
  }
};

const mapDispatchToProps = (dispatch: Function) =>
{
  return{
    onFetchActivities: () => dispatch(fetchActiviteis())
  }
}

export default connect(
mapStateToProps, mapDispatchToProps
)(App);

