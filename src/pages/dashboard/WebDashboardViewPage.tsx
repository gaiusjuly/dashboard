import * as React from 'react';
import * as _ from 'lodash';
import {inject, observer} from "mobx-react";
import {PageLayout} from "../../shared/components/PageLayout/PageLayout";
import {Else, If, Then} from "react-if";
import Helmet from "react-helmet";
import './assets/bootstrap/bootstrap4-alpha3.min.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './assets/web-analytics/style.css';

import {ActivityViewPageStore} from './ActivityViewPageStore';
import Activity1 from './Activity1';
import Activity2 from './Activity2';
import Activity3 from './Activity3';
import Table1 from './Table1';
import List1 from './List1';
import LoadingIndicator1 from "shared/components/loadingIndicator/LoadingIndicator1";
// import NavBar from './NavBar';
// import './grid.css';
@inject('routing', 'appStore')
@observer
export default class WebDashboardViewPage extends React.Component<{}, {}> {
  private store: ActivityViewPageStore;
  constructor(props:any){
    super(props)
    this.store = new ActivityViewPageStore();
  }
    public render() {

        return  <div>
            
{/* <NavBar /> */}
			<If condition={this.store.activitydata1.isComplete}>
                        <Then>

       <div className="page-content-toggle" id="page-content-wrapper" style={{ marginTop: '0em'}}>
		<div className="container-fluid">

			
			<div className="row m-b-2">
				<div className="col-lg-4">
					<div className="card card-block">
						<h4 className="card-title">Jira</h4>
						{/* <div id="users-device-doughnut-chart"></div> */}
                        <Activity1 id="jira" store={this.store} />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card card-block">
						<h4 className="card-title">Project</h4>
						{/* <div id="users-medium-pie-chart"></div> */}
                        <Activity2 id="jira1" store={this.store} />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card card-block">
						<h4 className="card-title">Repository</h4>
						{/* <div id="users-category-pie-chart"></div> */}
                        <Activity3 id="jira2" store={this.store} />
					</div>
				</div>
			</div>

            <div className="row">
				<div className="col-lg-4">
					<div className="card card-block">
						<h4 className="card-title m-b-2">Bit Bucket Commit</h4>
						{/* <div id="page-views-per-minute-column-chart"></div> */}
                        <List1 />
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card card-block">
						<h4 className="card-title m-b-2">Bit Bucket Request</h4>
						{/* <div id="page-views-per-second-column-chart"></div> */}
                        <Table1 store={this.store}/>
					</div>
				</div>
                
			</div>

         </div>
	   </div>

	   </Then>
		 <Else>
			 <LoadingIndicator1 isLoading={true} center={true} size={"big"}/>
		 </Else>
		 </If>
        
           </div>
            
    }

}




