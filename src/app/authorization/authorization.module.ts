import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { PrimeAuthorizationModule } from './prime-authorization/prime-authorization.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimeAuthorizationModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
