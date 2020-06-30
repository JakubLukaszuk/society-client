import React, { Fragment, FC } from "react";
import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { IDataState } from "../modles/activity";
import { NavBar } from "../features/components/NavBar";
import { SpinnerLoader } from "../features/components/activities/shared/loader/SpinnerLoader";
import HomePage from "../features/home/homePage";
import { ActivityForm } from "../features/components/activities/form/ActivityForm";
import ActivityDetails from "../features/components/activities/details/ActivityDetails";
import ActivityDashboard from "../features/components/activities/dashbord/ActivityDashboard";

const App: FC = (

) => {

  return (
    <Fragment>
      <NavBar/>
      <Container style={{ marginTop: "7em" }}>
      <Route exact path='/' component = {HomePage}/>
      <Route exact path='/activities' component = {ActivityDashboard}/>
      <Route path='/activities/:id' component = {ActivityDetails}/>
      <Route path='/createActivity' component = {ActivityForm}/>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: IDataState) => {
  return {
    isLoading: state.isLoading,

  };
};


export default connect(mapStateToProps)(App);
