import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../../services/map-data.service'

@Component({
  selector: 'app-wastemap',
  templateUrl: './wastemap.component.html',
  styleUrls: ['./wastemap.component.scss']
})
export class WastemapComponent implements OnInit {

  constructor(private mapData: MapDataService) { }

  ngOnInit(): void {
    this.mapData.getDumps().subscribe( result => console.log(result));    
  }

}
