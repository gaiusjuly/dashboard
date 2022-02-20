import React from 'react';
import {Card,Image,Grid } from 'semantic-ui-react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.scss';

export type IProps = {
  header:string;
  image?:string;
  description:string;
  extra:string;
}

export class Card30 extends React.Component<IProps, {}> {
  constructor(props:IProps){
      super(props);
  }
public render(){
  return (
    // <div style={{ height: 270, float: 'left'}}>
    <div className="card blue-grey darken-1">
    <div className="card-content white-text">
    <span className="card-title">{this.props.header}</span>
    <p>{this.props.description}</p>
        </div>
                <div className="card-action">
    <a target="_blank" rel="noopener noreferrer" >{this.props.extra}</a>
                </div>
            </div>
        // </div>
   )
  }
}

export class Card0 extends React.Component<IProps, {}> {
  constructor(props:IProps){
      super(props);
  }
public render(){
  return (
  //  <Card style={{width:'390px',height:'537px'}}>
  <Card>
    <Image src={this.props.image} wrapped ui={false} style={{width:'auto',height:'320px',position: 'relative'}}/>
    <Card.Content>
  <Card.Header>{this.props.header}</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
        {this.props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    {this.props.extra}
    </Card.Content>
   </Card> 
   )
}
}

// export const Card1 = () => {
//   return (
//     <Card style={{width:this.props.width, height:this.props.height}}>
//     <Image src={require('../../rootImages/assets/logos/abio.png') } wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>cBioPortal</Card.Header>
//       <Card.Meta>
//         <span className='date'></span>
//       </Card.Meta>
//       <Card.Description>
//         병원 암센터 진료 연구 포탈
//         CDW 구축의 일환으로 발생한 작업범위
//         진료챠트를 저수준 그래픽 라이버러리를 사용하여 개발함.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//      Java,Spring,mariaDB,ReactJs
//     </Card.Content>
//    </Card> 
//    )
// }
export type ICard = {
  width:number;
  height:number;
 }

 export class Card1 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
    <Image src={require('../../rootImages/assets/logos/bbio.jpg') } wrapped ui={false} />
    <Card.Content>
      <Card.Header>CDW</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
        병원 암센터 진료 연구 포탈
        CDW 구축의 일환으로 발생한 작업범위
        진료챠트 데이타테이블 통계등등.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     Java,Spring,전자정부,mariaDB,ReactJs
    </Card.Content>
   </Card> 
    )
   }
  }

export class Card2 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/chris.jpg') } style={{width:'360px', height:'360px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>문화다부처표준메타연계플랫폼</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           각 기관에서 데이타를 무작위로 수집하여 로 데이타를 적재
           이를 정제하여 디비에 적재
           적재된 데이타에 대한 수집률 분석 프로젝트
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart
         </Card.Content>
        </Card> 
       )
}
}

export class Card3 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/elbuy.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>전자구매</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           기업이 분사하면서 ERP구축과 함께 인발브된 전자구매시스템, 
           계약요청,단가합의,업체가입을 말아서 개발함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Java,Jsp,전자정부,AngularJS,MSSQL
         </Card.Content>
        </Card> 
       )
  }
}

export class Card4 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/ali.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>클라우드플랫폼</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           회원관리,로그인,
           고객센터(공지사항,QNA,포럼,교육신청,FAQ)를 말아서 개발
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Spring Boot,jquery,MySql,tiles
         </Card.Content>
        </Card> 
       )
  }
}

export class Card5 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/daniel.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>인사성과관리</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
          개인평가 1차평가 2차평가 매트릭스평가로 구성되는 성과관리 시스템.
          2차평가를 말아서 함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Oracle,Jquery,ADF,PL-SQL
         </Card.Content>
        </Card> 
       )
  }
}

export class Card6 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/dzrpt.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>Global SCM</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           수요예측 프로젝트
           데이타를 수집하여 집계표현
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Spring ,XFlatForm, Oracle
         </Card.Content>
        </Card> 
       )
  }
}

export class Card7 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/kasra.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>Global MES</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           모바일 생산관리 프로젝트
           크레 생산계획, 출하를 말아서 함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Spring,SEMP,jQuery,Oracle
         </Card.Content>
        </Card> 
       )
  }
}

export class Card8 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/matthew.png') } style={{width:'300px',height:'300px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>R.C Mobile</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           보험회사 리스크 컨설턴트들이 영업용으로 사용하기 위해 모바일 기기를 타깃으로한 프로젝트
           회원가입을 말아서 함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         jQuery,EJB,Struts
         </Card.Content>
        </Card> 
       )
  }
}

export class Card9 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/elliot.jpg')} style={{width:'300px',height:'300px'}} wrapped ui={false} />
         <Card.Content>
           <Card.Header>R.C Mobile</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           AS-IS To-Be 컨버전 프로젝트
           어드민을 말아서 함
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         jQuery,EJB,Struts
         </Card.Content>
        </Card> 
       )
  }
}

export class Card10 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/restaurantReason.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>노인장기요양보험</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           건보의 노인장기요양제도 도입에 따른 사업프로젝트
           부당수급과 징수를 말아서 함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         MiPlatform,Oracle,Spring,Rexpert Report
         </Card.Content>
        </Card> 
       )
  }
}

export class Card11 extends React.Component<ICard, {}> {
  constructor(props:ICard){
      super(props);
  }
public render(){
  return (
    <Card style={{width:this.props.width, height:this.props.height}}>
         <Image src={require('../../rootImages/assets/logos/steve.jpg') } wrapped ui={false} />
         <Card.Content>
           <Card.Header>체화공매 전자입찰</Card.Header>
           <Card.Meta>
             <span className='date'></span>
           </Card.Meta>
           <Card.Description>
           여행자들이 세관에서 압수당한 물건을 관세청에서 입찰로 판매하는 공매 작업 
           관리자부분을 말아서 함.
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
         Java,Jsp,Oracle,Ant
         </Card.Content>
        </Card> 
       )
  }
}


// export const Card2 = () => {
//   return (
//    <Card style={{width:'360px'}}>
//     <Image src={require('../../rootImages/assets/logos/culture.jpg') } wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>다부처연계플랫폼</Card.Header>
//       <Card.Meta>
//         <span className='date'></span>
//       </Card.Meta>
//       <Card.Description>
//       국가차원에 문화정보를 수집 데이타베이스화여 대국민서비스하기위한 
//       메타정보 플랫폼을 구축 기존에 정형화된 데이타에서 한층 진일보하여 
//       비정형데이타를 수집하여 이를 체계적으로 분류하여 수집가공함 
//       이는 적합한 문화정보서비스에 전초적 역할을 수행하는 작업이었음.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//     Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart
//     </Card.Content>
//    </Card> 
//    )
// }
