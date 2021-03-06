import * as _ from 'lodash';
import * as React from 'react';

import '../../globalStyles/prefixed-global.scss';
// import PortalHeader from "./PortalHeader";
import getBrowserWindow from "../../public-lib/lib/getBrowserWindow";
import {observer} from "mobx-react";

import LoadingIndicator from "../../shared/components/loadingIndicator/LoadingIndicator";
import AppConfig from "appConfig";
import Helmet from "react-helmet";
import {computed} from "mobx";
import { If, Else, Then } from 'react-if';

import {formatError} from "shared/lib/errorFormatter";
import {buildCBioPortalPageUrl} from "shared/api/urls";
import ErrorScreen from "shared/components/errorScreen/ErrorScreen";
import {isWebdriver} from "public-lib/lib/webdriverUtils";
import NavBar from '../../pages/dashboard/NavBar';
import LandingPage from 'pages/dashboard/LandingPage';
import DashboardViewPage from 'pages/dashboard/DashboardViewPage';
interface IContainerProps {
    location: Location;
    children: React.ReactNode;
}

@observer
export default class Container extends React.Component<IContainerProps, {}> {

    private get routingStore(){
        return getBrowserWindow().routingStore;
    }

    private get appStore(){
        return getBrowserWindow().globalStores.appStore;
    }

    renderChildren() {
        const childProps = {...this.props};
        const {children} = this.props;
        return React.Children.map(children,
            c => React.cloneElement(c as React.ReactElement<any>, childProps));
    }

    @computed get isSessionLoaded(){

        return !this.routingStore.needsRemoteSessionLookup || this.routingStore.remoteSessionData.isComplete;

    }
    componentDidMount(){
        console.log(this.props.location.pathname);
        
    }
    render() {
        // if (!isWebdriver() && !ServerConfigHelpers.sessionServiceIsEnabled()) {
        //     return (
        //         <div className="contentWrapper">
        //             <ErrorScreen
        //                 title={"No session service configured"}
        //                 body={<p>As of version 3.0.0, all cBioPortal installations require a session service.  Please review these instructions for how to do so. <a href="https://docs.cbioportal.org/2.1.2-deploy-without-docker/deploying#run-cbioportal-session-service">https://docs.cbioportal.org/2.1.2-deploy-without-docker/deploying#run-cbioportal-session-service</a>
        //                 </p>}
        //             />
        //         </div>
        //     )
        // }

        return (
            // <If condition={this.isSessionLoaded}>
                <div>
                    {/* <Helmet>
                        <meta charSet="utf-8" />
                        <title>{AppConfig.serverConfig.skin_title}</title>
                        <meta name="description" content={AppConfig.serverConfig.skin_description} />
                    </Helmet> */}

                    <div className="pageTopContainer">

                        <div className="contentWidth">
                            {/* <PortalHeader appStore={this.appStore}/> */}
                            {this.props.location.pathname!=='/' &&
                            // <LandingPage />
                              <NavBar />
                            //   <DashboardViewPage />
                            }
                        </div>
                    </div>
                    <If condition={this.appStore.isErrorCondition}>
                        <Then>
                            <div className="contentWrapper">
                                <ErrorScreen
                                    title={"Oops. There was an error retrieving data."}
                                    body={<a href={buildCBioPortalPageUrl("/")}>Return to homepage</a>}
                                    errorLog={formatError(this.appStore.undismissedSiteErrors)}
                                />
                            </div>
                        </Then>
                        <Else>
                            <div className="contentWrapper">
                                {(this.isSessionLoaded) && this.props.children}
                            </div>
                        </Else>
                    </If>


                </div>
            //     <Else>
            //         <LoadingIndicator isLoading={!this.isSessionLoaded} center={true} size={"big"}/>
            //     </Else>
            // </If>
        );
    }
}
