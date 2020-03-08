import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  apiURL: string = "http://www.ntropy.ovh/wastemap/hellomaps_writeBoundedGeoJson.php?db_table=dumps&SW_lat=33.761050492785614&SW_lng=35.23983024317773&NE_lat=33.965626966528795&NE_lng=35.865169756822304&public_map=1"

  constructor(private httpClient: HttpClient) { }

  getDumps() {
    return this.httpClient.get(this.apiURL)
  }
}
