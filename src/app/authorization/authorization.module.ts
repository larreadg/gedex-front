import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { PrimeAuthorizationModule } from './prime-authorization/prime-authorization.module';
import { LoginComponent } from './login/login.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeAuthorizationModule,
    AuthorizationRoutingModule
  ],
  providers: [
    MessageService
  ]
})
export class AuthorizationModule { }
