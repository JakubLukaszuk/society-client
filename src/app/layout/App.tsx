import React, { useEffect, Fragment, FC, useState } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { IDataState, IActivity } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { ActivityDashboard } from "../features/components/activities/dashbord/ActivityDashboard";
import {fetchActiviteis, setActivitiesArr} from "../actions/DataActions";

interface IProps extends IDataState{
  onFetchActivities: () => Promise<void>;
  onSetActivites: (activities: IActivity []) => Promise<void>;
}

const App: FC<IProps> = ({activities, onFetchActivities, onSetActivites}) => {
const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
const [editMode, setEditMode] = useState(false);

const handleSelectActivity = (id: string) =>{
  setSelectedActivity(activities.filter(a => a.id === id)[0]);
  setEditMode(false);
}

const handleOpenCreateForm = () => {
  setSelectedActivity(null);
  setEditMode(true);
}

const handleCrateActivity = (activity: IActivity) => {
  onSetActivites([...activities, activity]);
  setSelectedActivity(activity);
  setEditMode(false);
}

const handleEditActivity = (activity: IActivity) => {
  onSetActivites([...activities.filter(a => a.id !== activity.id), activity]);
  setSelectedActivity(activity);
  setEditMode(false);
}

const handleDeleteActivity = (id: string) => {
  onSetActivites([...activities.filter(a => a.id !== id)])
}

  useEffect(()=>{
    onFetchActivities();
  }, []);

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}/>
      <Container style ={{marginTop: '7em'}}>
        <ActivityDashboard activities = {activities}
        selectActivity = {handleSelectActivity}
        selectedActivity = {selectedActivity}
        editMode={editMode}
        setEditMode={setEditMode}
        setSelectedActivity={setSelectedActivity}
        createActivity = {handleCrateActivity}
        editActivity = {handleEditActivity}
        deleteActivity = {handleDeleteActivity}/>
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
    onFetchActivities: () => dispatch(fetchActiviteis()),
    onSetActivites: (activities: IActivity []) => dispatch(setActivitiesArr(activities))
  }
}

export default connect(
mapStateToProps, mapDispatchToProps
)(App);

