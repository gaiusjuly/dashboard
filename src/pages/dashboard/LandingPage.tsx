import React, { useContext, Fragment } from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router';
// import './landing.styles.css';
import 'pages/dashboard/assets/layout/styles.css';

const LandingPage = () => {
//   const token = window.localStorage.getItem('jwt');
//   const rootStore = useContext(RootStoreContext);
//   const { user, isLoggedIn } = rootStore.userStore;
//   const {openModal} = rootStore.modalStore;
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src={require('../../rootImages/assets/logo.png' )}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Oh's HOMEPAGE
        </Header>
          <Fragment>
          <Header as='h2' inverted content={`안녕하세요!반갑습니다`} />
          {/* <Header as='h3' inverted content={`ES6로 제작하였고 데시보드형태로 `} />
          <Header as='h3' inverted content={`화면크기에 따라 유동적으로 배열되게 구현하였습니다`} /> */}
          {/* <Button onClick={() => location.href="/dashboardview" } size='huge' inverted>  */}
          <Button onClick={() => location.href="/activitiesview" } size='huge' inverted> 
          Go Inside
          </Button>
        </Fragment>
        {/* )
        } */}
      </Container>
    </Segment>
  );
};

export default LandingPage;
