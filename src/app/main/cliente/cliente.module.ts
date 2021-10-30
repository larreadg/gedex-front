import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeClienteModule } from './prime-cliente/prime-cliente.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteEditComponent,
    ClienteAddComponent
  ],
  imports: [
    CommonModule,
    PrimeClienteModule,
    ReactiveFormsModule,
    ClienteRoutingModule
  ],
  providers: [
    MessageService
  ]
})
export class ClienteModule { }
