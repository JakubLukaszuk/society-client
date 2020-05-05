import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { ActivitiesList } from "../list/ActivitiesList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid.Column>
      <GridColumn width={6}>
        {selectActivity && !editMode && (
          <ActivityDetails activity={selectedActivity} setEditMode = {setEditMode}/>
        )}
        {editMode && <ActivityForm />}
      </GridColumn>
    </Grid>
  );
};
