import * as React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class NavBar extends React.Component<{}> {
  
  render() {
  return (
    <Menu fixed='top' inverted>
      {/* <Container> */}
        <Menu.Item header>
            <img src={require('../../rootImages/assets/logo.png' )} style={{marginRight: 10}} />
            {/* <Link to="/" id="about"> Oh's Home Page </Link> */}
            <Link to="/" id="activities"> Home </Link>
        </Menu.Item>
        {/* <Menu.Item>
          <a href={require('../../rootImages/cv.doc')} download="오세영.doc"><Button positive content='download'/></a>
        </Menu.Item> */}
        <Menu.Menu position='right'>
        <Menu.Item>
          <Link to="/dashboardview" id="activities"> Activities </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/about" id="about"> About </Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/contact" id="contact"> Contact </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={{ pathname: "https://github.com/gaiusjuly/dashboard" }} target="_blank" >Github </Link>
        </Menu.Item>
        </Menu.Menu>
      {/* </Container> */}
    </Menu>
  );
};
}

