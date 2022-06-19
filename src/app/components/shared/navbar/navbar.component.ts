import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = false;
  navData = navbarData;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav() : void{
    this.collapsed = false;
  }
}
