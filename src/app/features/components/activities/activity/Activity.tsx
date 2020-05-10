import React from 'react'
import { Item, Button, Label } from 'semantic-ui-react'
import { IActivity } from '../../../../modles/activity'


interface IProps{
    activity: IActivity
    select: (id: string) => void;
    remove: (id: string) => void;
}

export const Activity: React.FC<IProps> = ({activity, select, remove}) => {
    return (
        <Item>
        <Item.Content>
          <Item.Header as="a">{activity.title}</Item.Header>
          <Item.Meta>{activity.date}</Item.Meta>
          <Item.Description>
            <div>{activity.description}</div>
            <div>{activity.city}, {activity.placeOfEvent}</div>
          </Item.Description>
          <Item.Extra>
            <Button onClick={()=> select(activity.id)} floated="right" content="View" color="blue" />
            <Button onClick={()=> remove(activity.id)} floated="right" content="Delete" color="red" />
            <Label basic content={activity.category} />
          </Item.Extra>
        </Item.Content>
      </Item>
    )
}
