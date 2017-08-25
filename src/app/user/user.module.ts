import { NgModule } from '@angular/core';
import { JhipsterSharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import {
    userState,
} from './';

import { UserDetailComponent } from './user-detail.component';
import { RepoHomeComponent } from './repo/repo-home.component';
import { GogsUserDetectService } from '../shared';

@NgModule({
  imports: [
      JhipsterSharedModule,
      RouterModule.forRoot(userState, {useHash: true})
  ],
  declarations: [UserDetailComponent, RepoHomeComponent],
    providers: [GogsUserDetectService]
})
export class GogsUserModule { }
