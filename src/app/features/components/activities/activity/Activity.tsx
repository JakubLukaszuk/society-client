import React from 'react'
import { Item, Button, Label } from 'semantic-ui-react'
import { IActivity } from '../../../../modles/activity'


interface IProps{
    activity: IActivity
}

export const Activity: React.FC<IProps> = ({activity}) => {
    return (
        <Item key={activity.id}>
        <Item.Content>
          <Item.Header as="a">{activity.title}</Item.Header>
          <Item.Meta>{activity.date}</Item.Meta>
          <Item.Description>
            <div>{activity.description}</div>
            <div>{activity.city}, {activity.placeOfEvent}</div>
          </Item.Description>
          <Item.Extra>
            <Button floated="right" content="View" color="blue" />
            <Label basic content={activity.category} />
          </Item.Extra>
        </Item.Content>
      </Item>
    )
}
