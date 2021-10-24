import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarModule,
    PanelMenuModule,
    AccordionModule
  ]
})
export class PrimeMainModule { }
