import React, { useEffect, Fragment, FC, useState } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { IDataState, IActivity } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { ActivityDashboard } from "../features/components/activities/dashbord/ActivityDashboard";
import {
  fetchActiviteis,
  setActivitiesArr,
  createActivity,
  deleteActivity,
  updateActivity,
} from "../actions/DataActions";
import { SpinnerLoader } from "../features/components/activities/shared/loader/SpinnerLoader";

interface IProps extends IDataState {
  onFetchActivities: () => Promise<void>;
  onSetActivites: (activities: IActivity[]) => Promise<void>;
  onUpdateActivity: (activity: IActivity) => Promise<void>;
  onCrateActivity: (activity: IActivity) => Promise<void>;
  onDelteteActivity: (id: string) => Promise<void>;
}

const App: FC<IProps> = ({
  activities,
  isLoading,
  isSubmitting,
  onFetchActivities,
  onSetActivites,
  onUpdateActivity,
  onCrateActivity,
  onDelteteActivity,
}) => {
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCrateActivity = (activity: IActivity) => {
    onCrateActivity(activity).then(() => {
      onSetActivites([...activities, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    });
  };

  const handleEditActivity = (activity: IActivity) => {
    onUpdateActivity(activity);
    onSetActivites([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    onDelteteActivity(id);
    onSetActivites([...activities.filter((a) => a.id !== id)]);
  };

  useEffect(() => {
    onFetchActivities();
  }, []);

  if (isLoading) {
    return <SpinnerLoader content="activities are loading..." />;
  }

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handleCrateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
          isSubmitting={isSubmitting}
        />
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: IDataState) => {
  return {
    activities: state.activities,
    isLoading: state.isLoading,
    isSubmitting: state.isSubmitting,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onFetchActivities: () => dispatch(fetchActiviteis()),
    onSetActivites: (activities: IActivity[]) =>
      dispatch(setActivitiesArr(activities)),
    onUpdateActivity: (activity: IActivity) =>
      dispatch(updateActivity(activity)),
    onCrateActivity: (activity: IActivity) =>
      dispatch(createActivity(activity)),
    onDelteteActivity: (id: string) => dispatch(deleteActivity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
