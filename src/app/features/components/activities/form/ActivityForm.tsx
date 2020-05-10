import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initActivity,
  editActivity,
  createActivity
}) => {
  const initForm = () => {
    if (initActivity) {
      return initActivity;
    } else {
      return {
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        placeOfEvent: "",
      };
    }
  };

  const [activity, setActivity] = useState<any | IActivity>(initForm);

  const handleSubmit = () => {
    if(activity.id)
    {
      editActivity(activity);
    }
    else{
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity);
    }
  }

  const handleInutChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInutChange}
          name="title"
          placeholder="Title"
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInutChange}
          name="description"
          rows={2}
          placeholder="Description"
          value={activity.description}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          onChange={handleInutChange}
          name="category"
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
          onChange={handleInutChange}
          name="date"
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          onChange={handleInutChange}
          name="city"
        />
        <Form.Input
          placeholder="Place of event"
          value={activity.placeOfEvent}
          onChange={handleInutChange}
          name="placeOfEvent"
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
