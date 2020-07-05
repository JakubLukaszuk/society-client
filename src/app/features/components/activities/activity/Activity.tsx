import React from "react";
import { Item, Button, Label, Segment, Icon } from "semantic-ui-react";
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
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/placeholder.png" />
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>{activity.description}</Item.Description>
              <Button
                loading={isSubmitting}
                onClick={() => remove(activity.id)}
                floated="right"
                content="Delete"
                color="red"
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" /> {activity.date}
        <Icon name="marker" /> {activity.placeOfEvent}, {activity.city}
      </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="View"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};
