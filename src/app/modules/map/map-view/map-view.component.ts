import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { SatellitesService } from 'src/app/services/satellites.service';
import { MapLayerMouseEvent } from 'mapbox-gl';
import { Utilities } from 'src/app/classes/utilities';
import {
  TransformationType,
  Direction,
  CoordinatesService,
} from 'angular-coordinates';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  selectedPoint!: any;
  cursorStyle!: string;
  public transformationType = TransformationType;
  public direction = Direction;
  public decamelize = Utilities.decamelize;
  allSatellites$: any = of({
    type: 'FeatureCollection',
    features: [],
  });

  constructor(
    private satellitesService: SatellitesService,
    private coordinatesService: CoordinatesService
  ) {}

  public getAllSatellites() {
    this.allSatellites$ = this.satellitesService.getSatelliteLocations().pipe(
      map((satellites) => {
        let geometries = this.formatMapData(satellites);
        return {
          type: 'FeatureCollection',
          features: geometries,
        };
      })
    );
  }

  public getVisibleSatellites() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.allSatellites$ = this.satellitesService
              .getVisibleSatelliteLocations(
                position.coords.latitude,
                position.coords.latitude
              )
              .pipe(
                map((satellites) => {
                  let geometries = this.formatMapData(satellites);
                  return {
                    type: 'FeatureCollection',
                    features: geometries,
                  };
                })
              );
          }
        },
        (error) => Utilities.displayToast('error', error.message)
      );
    } else {
      Utilities.displayToast(
        'warning',
        'Geolocation is not supported by this browser.'
      );
    }
  }

  private formatMapData(satellites: SatelliteLocation[]) {
    return satellites.map((element) => {
      return {
        type: 'Feature',
        properties: {
          description: ` <div class="card-title">Path</div>
    <table class="table table-vertical">
      <tbody>
        <tr>
          <th>Latitude</th>
          <td>
             ${this.coordinatesService.transform(
               element.path[0].trace.latitude,
               this.transformationType.ToDegrees,
               this.direction.Latitude
             )}
          </td>
        </tr>

        <tr>
          <th>Longitude</th>
          <td>
             ${this.coordinatesService.transform(
               element.path[0].trace.longitude,
               this.transformationType.ToDegrees,
               this.direction.Longitude
             )}
          </td>
        </tr>
        <tr>
          <th>Height</th>
          <td>${element.path[0].trace.height}</td>
        </tr>
        <tr>
          <th>As At</th>
          <td>${element.path[0].asAt}</td>
        </tr>
      </tbody>
    </table>
    <br />

    <div class="card-title">Orbit</div>
    <table class="table table-vertical">
      <tbody>
              <tr>
          <th>Name</th>
          <td>${element.displayName}</td>
        </tr>
      </tbody>
    </table>`,
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [
            element.path[0]?.trace?.latitude,
            element.path[0]?.trace?.longitude,
          ],
        },
      };
    });
  }

  ngOnInit(): void {}

  onClick(evt: MapLayerMouseEvent) {
    this.selectedPoint = evt.features?.[0] as GeoJSON.Feature<GeoJSON.Point>;
  }
}
