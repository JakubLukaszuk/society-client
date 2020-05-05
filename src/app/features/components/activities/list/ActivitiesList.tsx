import React from "react";
import { Item, Segment} from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { Activity } from "../activity/Activity";

interface IProps{
    activities: IActivity[]
    selectActivity: (id: string) => void;
}

export const ActivitiesList: React.FC<IProps> = ({activities, selectActivity}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
      {activities.map((activity) => (
        <Activity activity = {activity} key={activity.id} select = {selectActivity}/>
      ))}

      </Item.Group>
    </Segment>
  );
};
