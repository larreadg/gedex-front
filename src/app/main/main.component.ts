import { Component, OnInit } from '@angular/core';
import { isMobile } from '../../globals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  toggler: boolean = isMobile();

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler = (event:any) => {
    this.toggler = event;
  }
}
