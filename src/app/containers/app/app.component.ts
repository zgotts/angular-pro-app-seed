import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription} from "rxjs/Subscription";

import { Store } from 'store';
import {AuthService, User} from "../../../auth/shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
        <app-header 
          [user]="user$ | async"
          (logout)="onLogout()">
        </app-header>
        <app-nav
          *ngIf="(user$ | async)?.authenticated">
        </app-nav>
        <!-- using async pipe because user$ is an Observable; this is essentially 
             <!--equivalent to setting up a .subscribe() on user$ &ndash;&gt;-->
        <!--<h1>{{ user$ | async | json }}</h1>-->
        <div class="wrapper">
          <router-outlet></router-outlet>
        </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    // Call to .subscribe() initiates the data flow for the
    // subscription to authService so that the Observable gets triggered
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
