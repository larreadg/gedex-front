import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { isMobile } from 'src/globals';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() sidebar = new EventEmitter<boolean>();
  toggler: boolean = isMobile();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar = () => {
    this.toggler = !this.toggler;
    this.sidebar.emit(this.toggler);
  }
}
