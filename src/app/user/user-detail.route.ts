import { Route } from '@angular/router';
import {UserDetailComponent} from './user-detail.component';

export const UserDetailRoute: Route = {
    path: '',
    component: UserDetailComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
