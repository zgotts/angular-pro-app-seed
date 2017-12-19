import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/* Initialize Firebase
 var config = {
 apiKey: "AIzaSyBbT0JLihhOLfe_okx7HCjm8CtG9FA84JY",
 authDomain: "fitness-app-d88fe.firebaseapp.com",
 databaseURL: "https://fitness-app-d88fe.firebaseio.com",
 projectId: "fitness-app-d88fe",
 storageBucket: "fitness-app-d88fe.appspot.com",
 messagingSenderId: "1080183743991"
 };
 firebase.initializeApp(config);
 */
