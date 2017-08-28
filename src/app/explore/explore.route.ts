import { Routes } from '@angular/router';
import { Route } from '@angular/router';
import {
    reposRoute,
    orgsRoute,
    usersRoute
} from './';

const homeRoute: Route = {
    path: '',
    pathMatch: 'full',
    redirectTo: 'repos',
    data: {
        pageTitle: 'default.explore'
    }
};

const EXPLORE_ROUTES = [
    homeRoute,
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
