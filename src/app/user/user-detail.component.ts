import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'jhi-detail',
    templateUrl: './user-detail.component.html',
    styles: []
})
export class UserDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            console.log(params['user']);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
