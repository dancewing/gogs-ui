import { NgModule } from '@angular/core';
import { JhipsterSharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import {
    exploreState,
    ExploreLayoutComponent,
    ReposComponent,
    UsersComponent,
    OrganizationsComponent
} from './';
import { ExploreNavComponent } from './nav/nav.component';
import {RepositoryResolvePagingParams} from './repos/repos.route';

@NgModule({
  imports: [
      JhipsterSharedModule,
      RouterModule.forRoot(exploreState, { useHash: true }),
  ],
  declarations: [ExploreLayoutComponent, ReposComponent, UsersComponent, OrganizationsComponent, ExploreNavComponent],
  providers: [RepositoryResolvePagingParams]
})
export class ExploreModule { }
