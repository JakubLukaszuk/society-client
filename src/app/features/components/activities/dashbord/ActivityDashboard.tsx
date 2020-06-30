import React, { useState, useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IActivity, IDataState } from "../../../../modles/activity";
import { ActivitiesList } from "../list/ActivitiesList";
import { ActivityForm } from "../form/ActivityForm";
import { connect } from "react-redux";
import { fetchActiviteis, setActivitiesArr, updateActivity, createActivity, deleteActivity, loadActivity, selectActivity } from "../../../../actions/DataActions";
import { SpinnerLoader } from "../shared/loader/SpinnerLoader";

interface IProps extends IDataState {
  onFetchActivities: () => Promise<void>;
  onSetActivites: (activities: IActivity[]) => Promise<void>;
  onUpdateActivity: (activity: IActivity) => Promise<void>;
  onCrateActivity: (activity: IActivity) => Promise<void>;
  onDelteteActivity: (id: string) => Promise<void>;
  onLoadActivity: (id: string) => Promise<void>;
  onSelectActivity : (activity?: IActivity) => Promise<void>;
}

const ActivityDashboard: React.FC<IProps>  = ({
  activities,
  isSubmitting,
  selectedActivity,
  isLoading,
  onFetchActivities,
  onSetActivites,
  onUpdateActivity,
  onCrateActivity,
  onDelteteActivity,
  onLoadActivity,
  onSelectActivity

}) => {

  useEffect(() => {
    onFetchActivities();
  }, []);

  const handleDeleteActivity = (id: string) => {
    onDelteteActivity(id);
    onSetActivites([...activities.filter((a) => a.id !== id)]);
  };


  if (isLoading) {
    return <SpinnerLoader content="activities are loading..." />;
  }
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList
          activities={activities}
          deleteActivity={handleDeleteActivity}
          isSubmitting = {isSubmitting}
        />
      </Grid.Column>
      <GridColumn width={6}>
      </GridColumn>
    </Grid>
  );
};

const mapStateToProps = (state: IDataState) => {
  return {
    activities: state.activities,
    isLoading: state.isLoading,
    isSubmitting: state.isSubmitting,
    selectedActivity: state.selectedActivity,
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
    onLoadActivity: (id: string) => dispatch(loadActivity(id)),
    onSelectActivity: (avtivity?: IActivity) => dispatch(selectActivity(avtivity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDashboard);
