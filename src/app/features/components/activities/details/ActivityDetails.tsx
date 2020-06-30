import React, { useEffect, useState } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { IActivity, IDataState } from "../../../../modles/activity";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { selectActivity, loadActivity } from "../../../../actions/DataActions";

interface DetailParams {
  id: string;
}

interface IProps extends RouteComponentProps<DetailParams> {
  selectedActivity: IActivity | undefined;
  onSelectActivity: (avtivity: IActivity | undefined) => void;
  onLoadActivity: (id: string) => void;
  isLoading: boolean;
}

const ActivityDetails: React.FC<IProps> = ({
  selectedActivity,
  onSelectActivity,
  onLoadActivity,
  match,
  isLoading,
}) => {


  useEffect(() => {
    onLoadActivity(match.params.id);
  }, [onLoadActivity]);

  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{selectedActivity?.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity?.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group width={2}>
          <Button
            onClick={() => {}}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => onSelectActivity(selectedActivity)}
            basic
            color="blue"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSelectActivity: (avtivity: IActivity | undefined) => dispatch(selectActivity(avtivity)),
    onLoadActivity: (id: string) => dispatch(loadActivity(id))
  };
};

const mapStateToProps = (state: IDataState) => {
  return {
    isLoading: state.isLoading,
    selectedActivity: state.selectedActivity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);
