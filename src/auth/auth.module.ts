import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBbT0JLihhOLfe_okx7HCjm8CtG9FA84JY",
  authDomain: "fitness-app-d88fe.firebaseapp.com",
  databaseURL: "https://fitness-app-d88fe.firebaseio.com",
  projectId: "fitness-app-d88fe",
  storageBucket: "fitness-app-d88fe.appspot.com",
  messagingSenderId: "1080183743991"
};


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {
}
