import React from 'react';
import { Container,Header,Card, Image } from 'semantic-ui-react';

export default class AboutViewPage extends React.Component<{}, {}> {
        constructor(props:any){
            super(props);
        }

  public render(){
    return (
      <div>
        <Container text style={{ marginTop: '7em' }}>
        
     <Card fluid>
      <Card.Content>
        <Card.Header>To About</Card.Header>
        {/* <Card.Meta>010-3487-2484 (gaius.july@gmail.com)</Card.Meta> */}
        <Card.Description>
        <p>
            My name is 오세영 and I am an experienced software engineer and developer <br/>
            I have a Bachelor's degree in Computer Science and several years of experience working on a wide range of projects <br/>
            only focused runned in web app It is the main chief element of my business success.<br/>
            </p>
            <p>
            Military service finished in artillery.<br/>
            Got the data processing engineer certificated and have been registered in KOSA<br/>
            </p>
            <p>
            I have been experienced with from lagacy to modern web app, presently having been interested cBioPortal and build my resume as a Typescript React.<br/>
            it's a greate job.
            </p>
            <p>
            안녕하세요!반갑습니다<br />
            컴퓨터과학전공 <br />
            육군병장<br />
            정보처리기사<br />
            주력분야 웹에플리케이션개발<br />
            <br />
            <br />
            </p>
            
            
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      
      </Card.Content>
    </Card>
        </Container>
      </div>
    )
  }
}
