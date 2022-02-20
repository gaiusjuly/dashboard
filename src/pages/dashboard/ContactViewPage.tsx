import React from 'react';
import { Container,Header,Card,Icon,Image } from 'semantic-ui-react';

export default class ContactViewPage extends React.Component<{}, {}> {
        constructor(props:any){
            super(props);
        }

    
  public render(){
    return (
      
    <Container textAlign="center" style={{ marginTop: '7em' }}>
      {/* <Card centered>
    <Image src={require('../../rootImages/po1.jpg') } wrapped ui={false} />
    <Card.Content>
      <Card.Header>010-3487-2484</Card.Header>
      <Card.Meta>
        <span className='date'>오세영 (gaius.july@gmail.com)</span>
      </Card.Meta>
      <Card.Description>
      Profesional and top quality service in web develolpment. don't hesitate to contact me
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    {'Get Your Projects Done'}
    </Card.Content>
  </Card> */}

    {/* <Card
    image= {require('../../rootImages/po1.jpg') }
    meta='오세영 (gaius.july@gmail.com)'
    header='010-3487-2484'
    description="Profesional and top quality service in web develolpment. don't hesitate to contact me"
    extra={'Get Your Projects Done'}
     /> */}

<Card centered>
      <Card.Content>
        <Image style={{width:'70px',height:'90px'}}
          floated='right'
          size='mini'
          src={require('../../rootImages/po1.jpg')}
        />
        <Card.Header>오세영</Card.Header>
        <Card.Meta>010-3487-2484 (gaius.july@gmail.com)</Card.Meta>
        <Card.Description>
        Profesional and top quality service in web develolpment. don't hesitate to contact me
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {'Get Your Projects Done'}
      </Card.Content>
    </Card>
    
    </Container>        
      
    )
  }
}
