import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { Principal } from '../';
import { LoginModalService } from '../login/login-modal.service';
import { UserService } from '../';

@Injectable()
export class GogsUserDetectService implements CanActivate {

    constructor(private router: Router,
                private loginModalService: LoginModalService,
                private principal: Principal,
                private userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        const user = this.userService.find(route.params['user']);
        return user.toPromise().then( (account) => {
            return account.id > 0;
        }).catch( (err) => {
            return false;
        });
    }
}
