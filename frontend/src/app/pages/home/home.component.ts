import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faMapMarkedAlt = faMapMarkedAlt;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {

  }

}
