import {Route} from '@angular/router';
import {BranchesComponent} from './branches/branches.component';
import {CommitsComponent} from './commits/commits.component';
import {FilesComponent} from './files/files.component';
import {ReleasesComponent} from './releases/releases.component';

 const branchesRoute: Route = {
    path: 'branches',
    component: BranchesComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
 const commitsRoute: Route = {
    path: 'commits',
    component: CommitsComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
 const filesRoute: Route = {
    path: 'files',
    component: FilesComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
 const releasesRoute: Route = {
    path: 'releases',
    component: ReleasesComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
export const REPOSITORY_ROUTES = [
    branchesRoute,
    commitsRoute,
    filesRoute,
    releasesRoute
];
