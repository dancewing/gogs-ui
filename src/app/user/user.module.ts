import { NgModule } from '@angular/core';
import { JhipsterSharedModule } from '../shared';
import { RouterModule } from '@angular/router';

import {
    userState,
} from './';

import { UserDetailComponent } from './user-detail.component';
import { GogsUserDetectService } from '../shared';
import { IssuesComponent } from './project/issues/issues.component';
import { ProjectNavComponent } from './project/nav/project-nav.component';
import { RepositoryComponent } from './project/repository/repository.component';
import { FilesComponent } from './project/repository/files/files.component';
import { CommitsComponent } from './project/repository/commits/commits.component';
import { BranchesComponent } from './project/repository/branches/branches.component';
import { ReleasesComponent } from './project/repository/releases/releases.component';
import { IssueBoardComponent } from './project/issues/board/board.component';
import { LabelsComponent } from './project/issues/labels/labels.component';
import { MilestonesComponent } from './project/issues/milestones/milestones.component';
import {ProjectLayoutComponent} from './project/project-layout.component';
import { IssueListComponent } from './project/issues/list/list.component';

@NgModule({
  imports: [
      JhipsterSharedModule,
      RouterModule.forRoot(userState, {useHash: true})
  ],
  declarations: [UserDetailComponent, ProjectLayoutComponent, IssuesComponent, ProjectNavComponent
      , RepositoryComponent, FilesComponent, CommitsComponent, BranchesComponent, ReleasesComponent, IssueBoardComponent, LabelsComponent, MilestonesComponent, IssueListComponent],
    providers: [GogsUserDetectService]
})
export class GogsUserModule { }
