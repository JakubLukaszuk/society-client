import React from "react";
import { Item, Button, Label } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import { Link } from "react-router-dom";

interface IProps {
  activity: IActivity;
  remove: (id: string) => void;
  isSubmitting: boolean;
}

export const Activity: React.FC<IProps> = ({
  activity,
  remove,
  isSubmitting,
}) => {
  console.log(isSubmitting);
  return (
    <Item>
      <Item.Content>
        <Item.Header as="a">{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city}, {activity.placeOfEvent}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link} to={`/activities/${activity.id}`}
            floated="right"
            content="View"
            color="blue"
          />
          <Button
            loading={isSubmitting}
            onClick={() => remove(activity.id)}
            floated="right"
            content="Delete"
            color="red"
          />
          <Label basic content={activity.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
