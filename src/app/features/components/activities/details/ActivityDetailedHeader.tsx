import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { IActivity } from "../../../../modles/activity";

const activityImageTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
}

const ActivityDetailedHeader: React.FC<{activity?: IActivity}> = ({activity}) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}></Segment>
      <Image src={"/assets/placeholder.png"} fluid />
      <Segment basic style = {activityImageTextStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header
                size="huge"
                content={activity?.title}
                style={{ color: "white" }}
              />
              <p>{activity?.date}</p>
              <p>Hosted by</p> <strong>COSRTAM</strong>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment clearing attached="bottom">
        <Button color="teal"> Join Activity</Button>
        <Button>Cancle</Button>
        <Button color="orange" floated="right">
          Menage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ActivityDetailedHeader;
