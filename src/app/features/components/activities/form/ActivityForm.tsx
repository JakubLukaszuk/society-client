import React, { useState, FormEvent, useEffect } from "react";
import { Segment, Form, Button, GridColumn, Grid } from "semantic-ui-react";
import { IActivity, IDataState } from "../../../../modles/activity";
import { v4 as uuid } from "uuid";
import {
  updateActivity,
  createActivity,
  loadActivity,
  selectActivity,
} from "../../../../actions/DataActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { SpinnerLoader } from "../shared/loader/SpinnerLoader";
import {Form as FinalForm, Field}from "react-final-form";
import { TextInput } from "../../../../common/form/TextInput";
import { TextAreaInput } from "../../../../common/form/TextAreaInput";
import SelectInput from "../../../../common/form/SelectInputs";
import { category } from "../../../../common/selectOptions/categoryOptions";

interface DetailParams {
  id: string;
}

interface IProps extends RouteComponentProps<DetailParams> {
  onUpdateActivity: (avtivity: IActivity) => Promise<void>;
  onCrateActivity: (avtivity: IActivity) => Promise<void>;
  onLoadActivity: (id: string) => Promise<void>;
  onSelectActivity: (activity?: IActivity) => void;
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
  history,
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
    if (match.params.id && activity.id.length === 0) {
      onLoadActivity(match.params.id).then(
        () => initFormState && setActivity(initFormState)
      );
    }
    return () => {
      onSelectActivity(undefined);
    };
  }, [onSelectActivity, initFormState, activity.id.length]);

  // const handleSubmit = () => {
  //   if (activity.id) {
  //     onUpdateActivity(activity).then(() =>
  //       history.push(`/activities/${activity.id}`)
  //     );
  //   } else {
  //     let newActivity = {
  //       ...activity,
  //       id: uuid(),
  //     };
  //     onCrateActivity(newActivity).then(() =>
  //       history.push(`/activities/${newActivity.id}`)
  //     );
  //   }
  // };

  if (isLoading) {
    return <SpinnerLoader />;
  }

  const finalHandleSubmit = (values: any)=>{
    console.log(values);
  }

  return (
    <Grid>
      <GridColumn width={10}>
        <Segment clearing>
        <FinalForm
          onSubmit={finalHandleSubmit}
          render={({handleSubmit})=>(
            <Form onSubmit={handleSubmit}>
            <Field
              // onChange={handleInutChange}
              name="title"
              placeholder="Title"
              value={activity.title}
              component={TextInput}
            />
            <Field
              // onChange={handleInutChange}
              name="description"
              rows={3}
              placeholder="Description"
              value={activity.description}
              component={TextAreaInput}

            />
            <Field
              component={SelectInput}
              placeholder="Category"
              value={activity.category}
              options = {category}
              // onChange={handleInutChange}
              name="category"
            />
            <Field
              component={TextInput}
              placeholder="Date"
              value={activity.date}
              // onChange={handleInutChange}
              name="date"
            />
            <Field
              component={TextInput}
              placeholder="City"
              value={activity.city}
              // onChange={handleInutChange}
              name="city"
            />
            <Field
              component={TextInput}
              placeholder="Place of event"
              value={activity.placeOfEvent}
              // onChange={handleInutChange}
              name="placeOfEvent"
            />
            <Button
              loading={isSubmitting}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button onClick={() => {}} floated="right" content="Cancel" />
          </Form>
          )
          }
        />
        </Segment>
      </GridColumn>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onUpdateActivity: (activity: IActivity) =>
      dispatch(updateActivity(activity)),
    onCrateActivity: (activity: IActivity) =>
      dispatch(createActivity(activity)),
    onLoadActivity: (id: string) => dispatch(loadActivity(id)),
    onSelectActivity: (activity?: IActivity) =>
      dispatch(selectActivity(activity)),
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
