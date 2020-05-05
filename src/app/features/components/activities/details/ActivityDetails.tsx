import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react';
import { IActivity } from '../../../../modles/activity';

interface IProps{
  activity: IActivity | null;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityDetails:React.FC<IProps> = ({activity, setEditMode}) => {
    return (
        <Card fluid>
          <Image src="/assets/placeholder.png" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{activity?.title}</Card.Header>
            <Card.Meta>
              <span>{activity?.date}</span>
            </Card.Meta>
            <Card.Description>{activity?.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths={2}>
              <Button onClick={()=> setEditMode(true)} basic color="blue" content="Edit" />
              <Button basic color="blue" content="Cancle" />
            </Button.Group>
          </Card.Content>
        </Card>
      );
}
