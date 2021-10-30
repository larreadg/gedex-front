import { Component, OnInit } from '@angular/core';
import { isMobile } from '../../globals';
import { CurrentUser } from '../models/usuario.model';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  toggler: boolean = isMobile();
  currentUser: CurrentUser;

  constructor(private authService: AuthServiceService) { 
    this.currentUser = this.authService.getUser();
  }

  ngOnInit(): void {
  }

  sidebarToggler = (event:any) => {
    this.toggler = event;
  }
}
