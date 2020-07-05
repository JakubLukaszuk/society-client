import React from "react";
import { Item, Segment } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { Activity } from "../activity/Activity";

interface IProps {
  activities: IActivity[];
  deleteActivity: (id: string) => void;
  isSubmitting: boolean
}

export const ActivitiesList: React.FC<IProps> = ({
  activities,
  deleteActivity,
  isSubmitting
}) => {
  return (
      <Item.Group divided>
        {activities.map((activity) => (
          <Activity
            isSubmitting = {isSubmitting}
            activity={activity}
            key={activity.id}
            //select={selectActivity}
            remove={deleteActivity}
          />
        ))}
      </Item.Group>
  );
};
