import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'jhi-explore-layout',
  templateUrl: './explore-layout.component.html',
  styles: []
})
export class ExploreLayoutComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe((params) => {
          console.log(params['project']);
          console.log(params['user']);
      });
  }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
