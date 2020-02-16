import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentTab: String;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.activeTab();
  }

  activeTab(): void {
    let url = this.router.url;
    if (url.includes("home")) {
      this.currentTab = "home";
    } else if (url.includes("wastemap")) {
      this.currentTab = "wastemap";
    } else {
      this.currentTab = "about";
    }
  }
}
