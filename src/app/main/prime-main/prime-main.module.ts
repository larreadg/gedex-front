import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarModule,
    PanelMenuModule,
    ButtonModule
  ]
})
export class PrimeMainModule { }
