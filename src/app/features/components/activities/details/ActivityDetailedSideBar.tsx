import React, { Fragment } from "react";
import { Segment, Image, List, Item, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ActivityDetailedSaidBar = () => {
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      ></Segment>
      Info
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
              >
              Host
              </Label>
              <Image size='tiny' />
              <Item.Content verticalAlign='middle'>
              <Item.Header as = 'h3'>
                <Link to={`#`}>Bob</Link>
              </Item.Header>
              <Item.Extra style={{color: 'orange'}}>Following</Item.Extra>
              </Item.Content>
              
          </Item>
        </List>
      </Segment>
    </Fragment>
  );
};
export default ActivityDetailedSaidBar;
