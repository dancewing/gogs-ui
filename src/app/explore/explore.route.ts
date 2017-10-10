import { Routes } from '@angular/router';
import { Route } from '@angular/router';
import {
    reposRoute,
    orgsRoute,
    usersRoute
} from './';
import {ExploreLayoutComponent} from './explore-layout.component';

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
    component: ExploreLayoutComponent,
    children: EXPLORE_ROUTES
}
];
