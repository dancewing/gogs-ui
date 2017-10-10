import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate, Route } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';
import { ReposComponent } from './repos.component';

@Injectable()
export class RepositoryResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}
export const reposRoute: Route = {
    path: 'repos',
    component: ReposComponent,
    resolve: {
        'pagingParams': RepositoryResolvePagingParams
    },
    data: {
        pageTitle: 'default.explore'
    }
};
