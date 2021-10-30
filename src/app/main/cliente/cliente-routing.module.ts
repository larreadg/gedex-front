import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListComponent
  },
  {
    path: 'agregar',
    component: ClienteAddComponent
  },
  {
    path: 'editar/:id',
    component: ClienteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
