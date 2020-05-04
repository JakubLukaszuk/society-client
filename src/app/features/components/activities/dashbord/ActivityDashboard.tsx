import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { ActivitiesList } from "../list/ActivitiesList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps{
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList activities = {activities}/>
      </Grid.Column>
      <GridColumn  width={6}>
        <ActivityDetails/>
        <ActivityForm/>
      </GridColumn>
    </Grid>
  );
};
