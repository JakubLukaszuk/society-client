import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            MainMenu
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item>
            <Button positive content='Crate activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
