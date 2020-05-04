import React from "react";
import { Item, Segment} from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { Activity } from "../activity/Activity";

interface IProps{
    activities: IActivity[]
}

export const ActivitiesList: React.FC<IProps> = ({activities}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
      {activities.map((activity) => (
        <Activity activity = {activity} key={activity.id}/>
      ))}

      </Item.Group>
    </Segment>
  );
};
