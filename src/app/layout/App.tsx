import React, { useEffect, Fragment, FC } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

import { IDataState } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { ActivityDashboard } from "../features/components/activities/dashbord/ActivityDashboard";
import {fetchActiviteis} from "../actions/DataActions";

interface IProps extends IDataState{
  onFetchActivities: () => Promise<void>;
}

const App: FC<IProps> = ({activities, onFetchActivities}) => {
  useEffect(()=>{
    onFetchActivities();
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

