import { Route } from '@angular/router';

import { OrganizationsComponent } from './organizations.component';

export const orgsRoute: Route = {
    path: 'organizations',
    component: OrganizationsComponent,
    data: {
        pageTitle: 'default.explore'
    }
};
