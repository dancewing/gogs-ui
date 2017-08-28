import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'jhi-project-nav',
  templateUrl: './project-nav.component.html',
styleUrls: [
    'project-nav.scss'
]
})
export class ProjectNavComponent implements OnInit, OnDestroy  {
    private subscription: Subscription;
    private user: string;
    private project: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.user = params['user'];
            this.project = params['project'];
            console.log(params['project']);
            console.log(params['user']);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getPath(path): string {
        return '/' + this.user + '/' + this.project + path;
    }
}
