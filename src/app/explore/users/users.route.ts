import { Route } from '@angular/router';

import { UsersComponent } from './users.component';

export const usersRoute: Route = {
    path: 'users',
    component: UsersComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
