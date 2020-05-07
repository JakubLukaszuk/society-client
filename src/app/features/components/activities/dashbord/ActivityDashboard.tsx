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
  setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
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
          <ActivityDetails
            activity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && <ActivityForm setEditMode={setEditMode} activity={selectedActivity!} />}
      </GridColumn>
    </Grid>
  );
};
