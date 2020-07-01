import React, { Fragment, FC } from "react";
import { Route, withRouter, RouteChildrenProps } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { IDataState } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import HomePage from "../features/home/homePage";
import ActivityForm from "../features/components/activities/form/ActivityForm";
import ActivityDetails from "../features/components/activities/details/ActivityDetails";
import ActivityDashboard from "../features/components/activities/dashbord/ActivityDashboard";

const App: FC<RouteChildrenProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/activities" component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route
          key={location.key}
          path={["/createActivity", "/manage/:id"]}
          component={ActivityForm}
        />
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: IDataState) => {
  return {
    isLoading: state.isLoading,
  };
};

export default withRouter(connect(mapStateToProps)(App));
