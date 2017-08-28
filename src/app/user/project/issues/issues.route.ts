import {Route} from '@angular/router';
import {IssueBoardComponent} from './board/board.component';
import {LabelsComponent} from './labels/labels.component';
import {MilestonesComponent} from './milestones/milestones.component';
import {IssueListComponent} from './list/list.component';

const issueHomeRoute: Route = {
    path: '',
    data: {},
    redirectTo: 'list',
    pathMatch: 'full'
};

const listRoute: Route = {
    path: 'list',
    component: IssueListComponent,
    data: {
        pageTitle: 'default.explore'
    }
};

const boardsRoute: Route = {
    path: 'board',
    component: IssueBoardComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
const labelsRoute: Route = {
    path: 'labels',
    component: LabelsComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
const milestonesRoute: Route = {
    path: 'milestones',
    component: MilestonesComponent,
    data: {
        pageTitle: 'default.explore'
    }
};

const ISSUES_ROUTES = [
    issueHomeRoute,
    listRoute,
    boardsRoute,
    labelsRoute,
    milestonesRoute
];

export const ISSUE_ROUTE: Route = {
    path: 'issues',
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    children : ISSUES_ROUTES
};
