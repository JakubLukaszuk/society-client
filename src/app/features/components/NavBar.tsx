import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

interface IProps{
  openCreateForm: () => void
}
export const NavBar : React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
            Society
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities"/>
        <Menu.Item>
            <Button as={NavLink} to="/createActivity" positive content='Crate activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
