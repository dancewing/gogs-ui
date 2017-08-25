import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'jhi-home',
  templateUrl: './repo-home.component.html',
  styles: []
})
export class RepoHomeComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe((params) => {
          console.log(params['repo']);
      });
  }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
