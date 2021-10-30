import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { PrimeMainModule } from './prime-main/prime-main.module';
import { MainComponent } from './main.component';
import { NavComponent } from './main-shared/nav/nav.component';
import { SidebarComponent } from './main-shared/sidebar/sidebar.component';
import { SidebarItemComponent } from './main-shared/sidebar-item/sidebar-item.component';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    PrimeMainModule,
    MainRoutingModule
  ],
  providers: []
})
export class MainModule { }
