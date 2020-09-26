import React, { Fragment, FC } from "react";
import {
  Route,
  withRouter,
  RouteChildrenProps,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { IDataState } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import HomePage from "../features/home/homePage";
import ActivityForm from "../features/components/activities/form/ActivityForm";
import ActivityDetails from "../features/components/activities/details/ActivityDetails";
import ActivityDashboard from "../features/components/activities/dashbord/ActivityDashboard";
import NotFound from "./NotFound";
import {ToastContainer} from 'react-toastify';

const App: FC<RouteChildrenProps> = ({ location }) => {
  return (
    <Fragment>
    <ToastContainer position='bottom-right'/>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: IDataState) => {
  return {
    isLoading: state.isLoading,
  };
};

export default withRouter(connect(mapStateToProps)(App));
