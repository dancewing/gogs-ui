import {Route} from '@angular/router';

import {
    RepoHomeComponent,
} from './';

export const RepoHomeRoute: Route = {
    path: '',
    data: {},
    component : RepoHomeComponent,
    canActivate: []
};
