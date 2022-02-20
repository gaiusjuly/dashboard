import * as React from 'react';
import * as _ from 'lodash';
import autobind from "autobind-decorator";
import * as request from 'superagent';
import {computed, observable, action, runInAction} from "mobx";
import {observer,} from 'mobx-react';
import {remoteData} from "public-lib/api/remoteData";
import AppConfig from "appConfig";
import {Card} from 'semantic-ui-react';
// import styles from './styles.module.scss';
import {PageLayout} from "../../shared/components/PageLayout/PageLayout";
import LoadingIndicator from "shared/components/loadingIndicator/LoadingIndicator";
import Helmet from "react-helmet";
import GridLayout, { Layout} from 'react-grid-layout';
// import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import './gridmain.css';
import './grid.css';
import { Responsive, WidthProvider } from "react-grid-layout";
import {Card30} from './ActivityCardPage';


const ResponsiveReactGridLayout = WidthProvider(Responsive);

export type layout = ReactGridLayout.Layout[];
export type layouts = {
    [lg: string]: layout;
};

export class DatasetPageStore {
  
  // generateLayout():any {
  //   var j = 0;
  //   return _.map(_.range(0, 5), function(item, i) {
  //     if( (i>0) && (i%4===0) )j*=3;
  //     return {
  //       x: i*3,
  //       y: j,
  //       w: 3,
  //       h: 3,
  //       i: i.toString(),
  //       // static: false
  //     };
  //   });
  // }
  generateLayout0() {
    let j=0;
    let k=0;
    return _.map(items, function(item, i) {
      // console.log(i);
      j=i;
      if(j>0 && (j%3===0) ) {j = 0;}
      else j+=3;
      
      return {
        x: j,
        // y: Math.floor(i / 6) * 3,
        y : k,
        w: 3,
        h: 3,
        i: item.id,
        // static:true
      };
      
    });
  }
  generateLayout():any {
    return [
      {x:0,y:0,w:3,h:3, i:"0"},
      {x:3,y:0,w:3,h:4, i:"1"},
      {x:6,y:0,w:3,h:4, i:"2"},
      {x:0,y:3,w:3,h:3, i:"3"},
      {x:3,y:4.5,w:3,h:3, i:"4"},
      {x:6,y:4.5,w:3,h:3, i:"5"},
      
      {x:0,y:6,w:3,h:3, i:"6"},
      {x:3,y:7.5,w:3,h:3, i:"7"},
      {x:6,y:7.5,w:3,h:3, i:"8"},

      {x:0,y:9,w:3,h:3, i:"9"},
      {x:3,y:10.5,w:3,h:3, i:"10"},
      {x:6,y:10.5,w:3,h:3, i:"11"},
      
      {x:0,y:12,w:3,h:3, i:"12"},
      {x:3,y:13.5,w:3,h:3, i:"13"},
      {x:6,y:13.5,w:3,h:3, i:"14"},
      
      {x:0,y:15,w:3,h:3, i:"15"},
      {x:3,y:16.5,w:3,h:3, i:"16"},
      {x:6,y:16.5,w:3,h:3, i:"17"},
      {x:0,y:18,w:3,h:3, i:"18"},
      {x:3,y:19.5,w:3,h:3, i:"19"},
      {x:6,y:19.5,w:3,h:3, i:"20"}
    ]
  }


  @action
  generateLayout1():any {
    let layoutarr = [
      {
        x: 0,
        y: 0 ,
        w: 3,
        h: 5,
        i: "0",
        static: false
      },
      {
        x: 3,
        y: 0 ,
        w: 3,
        h: 5,
        i: "1",
        static: false
      },
    //   {
    //     x: 8,
    //     y: 0 ,
    //     w: 4,
    //     h: 10,
    //     i: "jira2",
    //     static: false
    //   },
    //   {
    //     x: 0,
    //     y: 0 ,
    //     w: 4,
    //     h: 10,
    //     i: "jira3",
    //     static: false
    //   },
    //   {
    //     x: 4,
    //     y: 0 ,
    //     w: 4,
    //     h: 10,
    //     i: "jira4",
    //     static: false
    //   },
    //   {
    //     x: 8,
    //     y: 0 ,
    //     w: 4,
    //     h: 10,
    //     i: "jira5",
    //     static: false
    //   },
    ];
    return layoutarr;
  }

  @action
  generateLayout2():any {
    return _.map(_.range(0, 6), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: i*2,
        y: 0 ,
        w: 4,
        h: 7,
        i: i.toString(),
        
      };
    });
  }

  generateLayout3() {
    return _.map(_.range(0, 25), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    });
  }

  @observable layout:ReactGridLayout.Layout[];
  public layouts:layouts;
  @observable currentBreakpoint:string = "lg";
  // @observable compactType:string | "vertical" | "horizontal" | null | undefined = "horizontal";
  @observable compactType: "vertical" | "horizontal" | null = "horizontal";
  @observable mounted:boolean =  false;

  constructor() {
    const lay:ReactGridLayout.Layout[] = this.generateLayout();
    this.layouts = {lg:lay};
  }
   
  @autobind
  @action
  onLayoutChange(newLayout:ReactGridLayout.Layout[]) {
   this.layout = newLayout ;
  }

  @action
 onCompactTypeChange() {
   const compactType = this.compactType === "horizontal"
       ? "vertical"
       : "horizontal";
 }

 @autobind
 @action
 onBreakpointChange(breakpoint:string) {
     this.currentBreakpoint = breakpoint;
 }
}
 

type IGridProps = {
    className: string,
    items: number,
    rowHeight: number,
    onLayoutChange: (t:any) => void,
    cols: 12
}

export const items = [
  {
    id:"1",
    header:"풀필먼트피킹",
    // image:"images/assets/logos/abio.png",
    description:` VueJs 프레임웍 구축 `
    ,
    extra: "Java,Spring,ReactJS"
 } ,
  {
    id:"2",
    header:"대쉬보드",
    // image:"images/assets/logos/abio.png",
    description:` ReactJs 프레임웍 구축`
    ,
    extra: "Java,Spring,ReactJS"
},
    {
      id:"3",
        header:"CDW",
        // image:"images/assets/logos/abio.png",
        description:` 진료 연구 포탈 CDW 구축의 일환으로 발생한 작업범위,환자서바이벌추적관리 `
        ,
        extra: "Java,Spring,전자정부,mariaDB,ReactJS"
    },
    {
      id:"4",
        header:"다부처표준메타플랫폼",
        // image:"images/assets/logos/culture.jpg",
        description:`
        각 기관에서 데이타를 무작위로 수집하여 데이타를 적재 이를 문화분류하여 저장 저장된 데이타에 대한 수집률 관리
        `,
        extra: "Java,Jsp,jQuery,전자정부,Tibero,리얼그리드,eChart"
    },
    {
      id:"5",
      header:"전자구매 프로젝트",
      description:`전자구매 프로젝트`,
      extra: "Java,Jsp,전자정부,AngularJS,MSSQL"
  },
  {
    id:"6",
    header:"클라우드플랫폼",
    description:`클라우드플랫폼`,
    extra: "Spring Boot,jquery,MySql,tiles"
},
{
  id:"7",
  header:"인사성과관리",
  description:`인사성과관리`,
  extra: "Oracle,Jquery,ADF,PL-SQL"
},
{
  id:"8",
  header:"신보험온라인",
  description:`신보험온라인`,
  extra: "Oracle,spring,xPlatform,RD"
},
{
  id:"9",
  header:"Global SCM",
  description:`Global SCM`,
  extra: "Spring ,XFlatForm, Oracle"
},
{
  id:"10",
  header:"Global MES",
  description:`Global MES`,
  extra: "Spring,SEMP,jQuery,Oracle"
},
{
  id:"11",
  header:"R.C Mobile",
  description:`R.C Mobile`,
  extra: "jQuery,EJB,Struts"
},
{
  id:"12",
  header:"Web Innovation",
  description:`Web Innovation`,
  extra: "Java,Spring,jQuery,Oracle"
},
{
  id:"13",
  header:"국가대표포탈",
  description:`국가대표포탈`,
  extra: "Java,Spring,MySql"
},
{
  id:"14",
  header:"노인장기요양보험",
  description:`노인장기요양보험`,
  extra: "MiPlatform,Oracle,Spring,Rexpert"
},
{
  id:"15",
  header:"새올행정시군구고도화",
  description:`새올행정시군구고도화`,
  extra: "Java,oracle,trustform,ejb"
},
{
  id:"16",
  header:"전자계약포탈",
  description:`전자계약포탈`,
  extra: "Java,Jsp,Oracle,Struts"
},
{
  id:"17",
  header:"부동산등기운영",
  description:`부동산등기운영`,
  extra: "Java,oracle,trustform,cmm"
},
{
  id:"18",
  header:"보험사기 인지고도화",
  description:`보험사기 인지고도화`,
  extra: "Java,oracle,OLAP"
},
{
  id:"19",
  header:"체화공매 전자입찰",
  description:`체화공매 전자입찰`,
  extra: "Java,Jsp,Oracle,Ant"
},
{
  id:"20",
  header:"PDSS4.0",
  description:`PDSS4.0`,
  extra: "Java,Jsp,Oracle,Ant,EJB"
},
{
  id:"21",
  header:"해군함정포탈",
  description:`해군함정포탈`,
  extra: "Java,Jsp,Oracle,Handy groupware"
},
{
  id:"22",
  header:"서울시교육공무원포탈",
  description:`서울시교육공무원포탈`,
  extra: "Java,Jsp,Oracle"
},
];

@observer
export default class ActivityViewPage extends React.Component<IGridProps, {}> {
    private store:DatasetPageStore;
    
    public static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12
      };
    
      
      constructor(props:any) {
        super(props);
        this.store = new DatasetPageStore();
        
    }

    generateDOM() {
    //   console.log(this.store.layouts.lg);
      
      return _.map(this.store.layouts.lg, function(l:ReactGridLayout.Layout, i) {
        // return _.map(items, function(item,i) {
        console.log(i);
        return (
            // <Card0 {...items[i]} />
            // <span key={i}><Card0 {...items[i]} /></span>
            <span key={i}><Card30 key={i} {...items[i]} /></span>
        );
       
      });
    }

    // generateDOM1() {
    //     return _.map(this.store.layouts.lg, function(l:ReactGridLayout.Layout, i) {
    //       console.log(l.i);
    //     return (
    //       <div key={l.i}>
    //         {/* <span className="text">{i}</span> */}
    //         {l.i==="jira" &&
    //         <Activity1 id={l.i} store={this.store}/>
    //         }
    //         {l.i==="jira1" &&
    //         <Activity2 id={l.i} store={this.store}/>
    //         }
    //         {l.i==="jira2" &&
    //         <Activity3 id={l.i} store={this.store}/>
    //         }
    //         {l.i==="jira3" &&
    //         <Table1 store={this.astore}/>
    //         }
    //         {l.i==="jira4" &&
    //         <List1 />
    //         }
    //       {/* {
    //         activities.map(activity => ( */}
    //          {/* <ActivityListItem key={i} activity={activity} /> */}
    //       {/* // ))
    //       // } */}
    //        </div>     
    //         )
    //       })     
    // }
  
private cols= { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
    public render() {

        const header:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_header) ? <p style={{marginBottom:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_header!}}></p> : null;
        const footer:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_footer) ? <p style={{marginTop:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_footer!}}></p> : null;

    return (
     <div style={{ marginTop: '5em'}}>
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight = {45}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
          width={100}
          layouts={this.store.layouts}
          onBreakpointChange={this.store.onBreakpointChange}
          onLayoutChange={this.store.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={true}
          compactType={this.store.compactType}
          preventCollision={!this.store.compactType}
          isDraggable={false}
          isResizable={false}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    )    
  }
}
