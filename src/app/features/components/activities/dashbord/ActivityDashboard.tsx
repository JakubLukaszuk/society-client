import React, { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IActivity, IDataState } from "../../../../modles/activity";
import { ActivitiesList } from "../list/ActivitiesList";
import { connect } from "react-redux";
import { fetchActiviteis, setActivitiesArr, deleteActivity } from "../../../../actions/DataActions";
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
  isLoading,
  onFetchActivities,
  onSetActivites,
  onDelteteActivity,
}) => {

  useEffect(() => {
    onFetchActivities();
  }, [onFetchActivities]);

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
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onFetchActivities: () => dispatch(fetchActiviteis()),
    onSetActivites: (activities: IActivity[]) =>
      dispatch(setActivitiesArr(activities)),
    onDelteteActivity: (id: string) => dispatch(deleteActivity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDashboard);
