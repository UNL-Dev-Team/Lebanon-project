import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let url = event.url;
        if (url.includes("home")) {
          this.currentTab = "home";
        } else if (url.includes("wastemap")) {
          this.currentTab = "wastemap";
        } else {
          this.currentTab = "about";
        }
      }
    });
  }
}
