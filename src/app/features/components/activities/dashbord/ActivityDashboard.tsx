import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { ActivitiesList } from "../list/ActivitiesList";

interface IProps{
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column widescreen={10}>
        <ActivitiesList activities = {activities}/>
      </Grid.Column>
    </Grid>
  );
};
