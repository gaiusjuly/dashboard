import * as React from 'react';
import * as _ from 'lodash';
import {If, Then, Else} from 'react-if';
import {observer, inject, Observer } from "mobx-react";
import { observable } from 'mobx';
import Chart from 'chart.js';
import AppConfig from 'appConfig';
// import 'react-select1/dist/react-select.css';
// import {CancerStudyQueryUrlParams, QueryStore} from "../../shared/components/query/QueryStore";
// import QueryAndDownloadTabs from "../../shared/components/query/QueryAndDownloadTabs";
// import {PageLayout} from "../../shared/components/PageLayout/PageLayout";
// import RightBar from "../../shared/components/rightbar/RightBar";
import getBrowserWindow from "../../public-lib/lib/getBrowserWindow";
// tslint:disable-next-line:no-import-side-effect
// import "./homePage.scss";
// import autobind from "autobind-decorator";
import { Container } from 'semantic-ui-react';
import NavBar from '../dashboard/NavBar';
// (Chart as any).plugins.register({
//     beforeDraw: function (chartInstance: any) {
//         const ctx = chartInstance.chart.ctx;
//         ctx.fillStyle = "white";
//         ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
//     }
// });

import GridTest from '../dashboard/GridTest';

(Chart as any).plugins.register({
    beforeDraw: function (chartInstance: any) {
        const ctx = chartInstance.chart.ctx;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
    }
});

const win = (window as any);

export interface IResultsViewPageProps {
    routing: any;
}

// export function createQueryStore(currentQuery?:any) {

//     const win:any = window;

//     const queryStore = new QueryStore(currentQuery);

//     queryStore.singlePageAppSubmitRoutine = function(query:CancerStudyQueryUrlParams) {

//         // normalize this
//         query.cancer_study_list = query.cancer_study_list || query.cancer_study_id;
//         delete query.cancer_study_id;

//         win.routingStore.updateRoute(query, "results", true);

//     };

//     return queryStore;

// }

@inject('appStore','routing')
@observer
export default class HomePage extends React.Component<IResultsViewPageProps, {}> {

    // @observable showQuerySelector = true;

    // queryStore:QueryStore;

    constructor(props: IResultsViewPageProps) {
        super(props);
    }

    componentWillMount(){
        // this.queryStore = createQueryStore();
    }

    // private handleTabChange(id: string) {
    //     this.props.routing.updateRoute({ tab: id });
    // }

    // @autobind
    // private getQueryStore(){
    //     return this.queryStore;
    // }

    public render() {

        return (
            <>
                <NavBar />
                {/* <Container style={{ marginTop: '7em' }}> */}
                 {/* <ActivityViewPage />    */}
                 
                 {/* <GridTest /> */}
                {/* </Container> */}
            </>
        )

    }
}
