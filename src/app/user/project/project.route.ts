import {Route} from '@angular/router';
import {ProjectLayoutComponent} from './project-layout.component';
import {REPOSITORY_ROUTES} from './repository/repository.route';
import {ISSUE_ROUTE} from './issues/issues.route';

const ProjectHomeRoute: Route = {
    path: '',
    data: {},
    redirectTo: 'files',
    pathMatch: 'full'
};

const PROJECT_ROUTES = [
    ProjectHomeRoute,
    ...REPOSITORY_ROUTES,
    ISSUE_ROUTE
];

export const ProjectRoute: Route = {
    path: ':project',
    data: {},
    canActivate: [],
    component: ProjectLayoutComponent,
    children: PROJECT_ROUTES
};
