import * as React from "react";
import {Link} from "react-router";

export default class RepositoryDetailLink extends React.Component<{ id: string, className?: string }, {}> {
    render() {
        return <Link to={`/repositorydetail?id=${this.props.id}`} 
                     className={this.props.className} style={{color:"white"}} target="_blank">{this.props.children}</Link>
    }
}