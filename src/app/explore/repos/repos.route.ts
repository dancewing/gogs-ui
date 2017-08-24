import { Route } from '@angular/router';

import { ReposComponent } from './repos.component';

export const reposRoute: Route = {
    path: 'repos',
    component: ReposComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
