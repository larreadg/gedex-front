import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items!: MenuItem[];

  constructor(private localService: LocalService) {}

  async ngOnInit() {
    this.items =  await this.localService.getSidebar().toPromise();
  }

}
