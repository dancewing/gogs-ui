import { NgModule } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { ReposService } from './repos.service';
import { JhipsterSharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import {
    exploreState,
    ReposComponent,
    UsersComponent,
    OrganizationsComponent
} from './';

@NgModule({
  imports: [
      JhipsterSharedModule,
      RouterModule.forRoot(exploreState, { useHash: true }),
  ],
  declarations: [ReposComponent, UsersComponent, OrganizationsComponent],
  providers: [OrganizationsService, ReposService]
})
export class ExploreModule { }
