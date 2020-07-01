import React, { useState, FormEvent, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity, IDataState } from "../../../../modles/activity";
import {v4 as uuid} from 'uuid';
import { updateActivity, createActivity, loadActivity, selectActivity } from "../../../../actions/DataActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { SpinnerLoader } from "../shared/loader/SpinnerLoader";


interface DetailParams {
  id: string;
}

interface IProps extends RouteComponentProps<DetailParams> {
  onUpdateActivity: (avtivity: IActivity)=> Promise<void>;
  onCrateActivity: (avtivity: IActivity ) => Promise<void>;
  onLoadActivity: (id: string) => Promise<void>;
  onSelectActivity: (activity?: IActivity ) => void;
  isLoading: boolean;
  selectedActivity: IActivity | undefined;
  isSubmitting: boolean;
}

export const ActivityForm: React.FC<IProps> = ({
  onUpdateActivity,
  onCrateActivity,
  onLoadActivity,
  onSelectActivity,
  selectedActivity: initFormState,
  isSubmitting,
  isLoading,
  match,
  history
}) => {

  const [activity, setActivity] = useState<IActivity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    placeOfEvent: "",
  });

  useEffect(() => {
    if(match.params.id && activity.id.length === 0){
      onLoadActivity(match.params.id).then(
        () => initFormState  && setActivity(initFormState))
    }
    return () => {
      onSelectActivity(undefined);
    }
  }, [onSelectActivity,initFormState, activity.id.length])

  const handleSubmit = () => {
    if(activity.id)
    {
      onUpdateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
    }
    else{
      let newActivity = {
        ...activity,
        id: uuid()
      }
      onCrateActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
    }
  }

  const handleInutChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  if(isLoading)
  {
    return <SpinnerLoader/>
  }

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
        <Button loading={isSubmitting} floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => {}}
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onUpdateActivity: (activity: IActivity) =>
      dispatch(updateActivity(activity)),
    onCrateActivity: (activity: IActivity) =>
      dispatch(createActivity(activity)),
    onLoadActivity: (id: string) =>
      dispatch(loadActivity(id)),
    onSelectActivity: (activity?: IActivity) =>
      dispatch(selectActivity(activity))
  };
};

const mapStateToProps = (state: IDataState) => {
  return {
    isSubmitting: state.isSubmitting,
    isLoading: state.isLoading,
    selectedActivity: state.selectedActivity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);


