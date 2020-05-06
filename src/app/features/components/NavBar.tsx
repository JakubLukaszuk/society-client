import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps{
  openCreateForm: () => void
}
export const NavBar : React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            MainMenu
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Crate activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
