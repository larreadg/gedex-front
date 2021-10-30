import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isMobile } from 'src/globals';
import { CurrentUser } from '../../../models/usuario.model';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  usuario: string = '';
  @Input() set user(user: CurrentUser){
    this.currentUser = user;
    this.usuario = `${this.currentUser.nombres.split(' ')[0]} ${this.currentUser.apellidos.split(' ')[0]}`
  }
  @Output() sidebar = new EventEmitter<boolean>();
  toggler: boolean = isMobile();
  currentUser!: CurrentUser;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidebar = () => {
    this.toggler = !this.toggler;
    this.sidebar.emit(this.toggler);
  }

  logout = () => {
    this.authService.removeSession();
    this.router.navigate(['/login']);
  }
}
