import { Routes } from '@angular/router';

import {
    ProjectRoute,
    UserDetailRoute
} from './';
import {GogsUserDetectService} from '../shared';

const USER_ROUTES = [
    UserDetailRoute,
    ProjectRoute
];
export const userState: Routes = [{
    path: ':user',
    data: {},
    canActivate: [GogsUserDetectService],
    children : USER_ROUTES
}
];
