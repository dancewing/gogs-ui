import { Routes } from '@angular/router';

import {
    RepoRoute,
    UserDetailRoute
} from './';
import {GogsUserDetectService} from '../shared';

const USER_ROUTES = [
    UserDetailRoute,
    RepoRoute
];
export const userState: Routes = [{
    path: ':user',
    data: {},
    canActivate: [GogsUserDetectService],
    children : USER_ROUTES
}
];
