import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SatelliteLocation } from '../models/satellite-location.interface';

@Injectable({
  providedIn: 'root',
})
export class SatellitesService {
  constructor(private http: HttpClient) {}

  getSatelliteLocations() {
    return this.http.get<SatelliteLocation[]>(
      'https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations/'
    );
  }

  getVisibleSatelliteLocations(latitude: number, longitude: number) {
    return this.http.get<SatelliteLocation[]>(
      `https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations/VisibleFrom/${latitude}/${longitude}/`
    );
  }
}
