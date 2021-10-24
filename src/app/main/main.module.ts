import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { PrimeMainModule } from './prime-main/prime-main.module';
import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrimeMainModule,
    MainRoutingModule
  ],
  providers: []
})
export class MainModule { }
