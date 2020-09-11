import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../../services/map-data.service'
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map;

  constructor(private mapData: MapDataService) { 
    console.log(mapData.getDumps());
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 33.8634, 35.5525 ],
      zoom: 11
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    var icon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    this.mapData.getDumps()["default"][2].data.forEach(element => {
      if(element.type == "M") {
        icon.options.iconUrl = "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png";
        L.marker([element.lat, element.lng], {icon: icon}).addTo(this.map);

      } else if(element.type == "RC") {
        icon.options.iconUrl = "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
        L.marker([element.lat, element.lng], {icon: icon}).addTo(this.map);

      } else if(element.type == "L") {
        icon.options.iconUrl = "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
        L.marker([element.lat, element.lng], {icon: icon}).addTo(this.map);

      } else if(element.type == "D") {
        icon.options.iconUrl = "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"
        L.marker([element.lat, element.lng], {icon: icon}).addTo(this.map);

      }
      else {
        icon.options.iconUrl = "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png";
      }
    });
    
  }

}
