import {Route} from '@angular/router';

import {
    RepoHomeRoute,
} from './';

const REPO_ROUTES = [
    RepoHomeRoute
];

export const RepoRoute: Route = {
    path: ':repo',
    data: {},
    canActivate: [],
    children: REPO_ROUTES
};
