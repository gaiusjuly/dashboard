import React from 'react';
import { inject, observer } from 'mobx-react';
import { Item, Button, Label, Segment, Menu, Header ,Table} from 'semantic-ui-react';
import { computed, IReactionDisposer, reaction, observable } from "mobx";
import getBrowserWindow from "../../public-lib/lib/getBrowserWindow";
import * as _ from "lodash";
import {
    ActivityViewPageStore,
    RepositoryViewURLQuery,
} from "pages/dashboard/ActivityViewPageStore";

@inject('routing', 'appStore')
export default class RepositoryDetailPage extends React.Component<{}, {}>{
    private store: ActivityViewPageStore;
    private queryReaction: IReactionDisposer;
    private repositoryViewURLQuery: RepositoryViewURLQuery;
    constructor(props: any) {
        super(props);
        this.store = new ActivityViewPageStore();

        this.queryReaction = reaction(
            () => [props.routing.location.query, props.routing.location.hash],
            ([query, hash]) => {
                if (!getBrowserWindow().globalStores.routing.location.pathname.includes("/repositorydetail")) {
                    return;
                }

                const newStudyViewFilter: RepositoryViewURLQuery = _.pick(query, [
                    "id",
                    "name"
                ]);

                if (hash) {
                    const filters = hash.match(/filterJson=([^&]*)/);
                    if (filters && filters.length > 1) {
                        newStudyViewFilter.filters = filters[1];
                    }
                }
                if (!_.isEqual(newStudyViewFilter, this.repositoryViewURLQuery)) {
                    this.store.updateStoreFromURL(newStudyViewFilter);
                    this.repositoryViewURLQuery = newStudyViewFilter;
                }
            },
            { fireImmediately: true }
        );
    }
 


public render() {

  return (
    <Table>
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>
                Name
            </Table.HeaderCell>
            <Table.HeaderCell>
                Premium Plan
            </Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
        </Table.Row>
    </Table.Body>
</Table>
  );
 };
}
