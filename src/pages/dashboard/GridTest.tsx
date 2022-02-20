import * as React from 'react';
import * as _ from 'lodash';
import {observer,} from 'mobx-react';
import {remoteData} from "public-lib/api/remoteData";
import AppConfig from "appConfig";
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
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
} from 'semantic-ui-react'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

// import {GridStore} from './GridStore';


type IGridProps = {
    className: string,
    items: number,
    rowHeight: number,
    onLayoutChange: (t:any) => void,
    cols: 12
}

export type layout = ReactGridLayout.Layout[];

export type layouts = {
    [lg: string]: layout;
};
export type lstate = {
  layouts:layouts;
  layout:ReactGridLayout.Layout[];
  currentBreakpoint: string;
  compactType: "vertical" | "horizontal" | null;
  mounted: boolean;
}
// @observer
export default class GridTest extends React.Component<IGridProps, lstate> {
    public static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: 12
      };
    // private layouts: { lg: ReactGridLayout.Layout[]; }
  
    constructor(props:any) {
        super(props);
        const lay = generateLayout();
         this.state = {
           layout:[],
          currentBreakpoint: "lg",
          compactType: "vertical",
          mounted: false,
          layouts: { lg: lay }
        };
        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
        this.onNewLayout = this.onNewLayout.bind(this);

        console.log(lay);
    }
   
    generateDOM() {
      // return _.map(this.store.layout.lg, function(l:ReactGridLayout.Layout, i) {
        return _.map(this.state.layouts.lg, function(l:ReactGridLayout.Layout, i) {
        return (
          <div key={i} className={l.static ? "static" : ""}>
            {l.static ? (
              <span
                className="text"
                title="This item is static and cannot be removed or resized."
              >
                Static - {i}
              </span>
            ) : (
              <span className="text">{i}</span>
            )}
          </div>
        );
      });
    }
    stringifyLayout() {
      // return this.store.layout.lg.map(function(l:Layout) {
        return this.state.layouts.lg.map(function(l:Layout) {
        return (
          <div className="layoutItem" key={l.i}>
            <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
          </div>
        );
      });
    }

    onLayoutChange(newLayout:ReactGridLayout.Layout[]) {
       // onLayoutChange(newLayout:[]) {
      // this.store.layout.lg = newLayout;
      this.setState({ layout: newLayout });
    }

    onCompactTypeChange() {
      const compactType = this.state.compactType === "horizontal"
          ? "vertical"
          : "horizontal";
    }
  
    onNewLayout() {
      // this.setState({
      //   layouts: { lg: generateLayout() }
      // });
    }

    onBreakpointChange(breakpoint:string) {
      this.setState({
        currentBreakpoint: breakpoint
      });
    }
private cols= { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
    public render() {

        const header:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_header) ? <p style={{marginBottom:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_header!}}></p> : null;
        const footer:JSX.Element|null = !_.isEmpty(AppConfig.serverConfig.skin_data_sets_footer) ? <p style={{marginTop:"20px"}} dangerouslySetInnerHTML={{__html: AppConfig.serverConfig.skin_data_sets_footer!}}></p> : null;

        return <PageLayout className={"whiteBackground"}>
            <div>

                <Helmet>
                    <title>gridtest</title>
                </Helmet>

                {/* <h1>Datasets</h1> */}

                <div>
        <div>
        
        
        {/* <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button> */}
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight = {30}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
          width={100}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={true}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>


    </div>

            </div>
        </PageLayout>

    }
}
function generateLayout() {
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
function generateLayout1() {
  return _.map(_.range(0, 6), function(item, i) {
    // var y = Math.ceil(Math.random() * 4) + 1;
    var y = i%4;
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