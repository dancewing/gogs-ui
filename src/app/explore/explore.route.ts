import { Routes } from '@angular/router';

import {
    reposRoute,
    orgsRoute,
    usersRoute
} from './';

const EXPLORE_ROUTES = [
    reposRoute,
    orgsRoute,
    usersRoute
];

export const exploreState: Routes = [{
    path: 'explore',
    data: {},
    canActivate: [],
    children: EXPLORE_ROUTES
}
];
