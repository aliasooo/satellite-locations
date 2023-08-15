import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utilities } from 'src/app/classes/utilities';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';
import { SatellitesService } from 'src/app/services/satellites.service';

@Component({
  selector: 'app-list-visible-satellites',
  templateUrl: './list-visible-satellites.component.html',
  styleUrls: ['./list-visible-satellites.component.scss'],
})
export class ListVisibleSatellitesComponent
  implements OnInit, AfterViewChecked
{
  public satelliteLocations$: Observable<SatelliteLocation[]> = of([]);
  public isShowDetails = false;
  public selectedSatellite!: SatelliteLocation;

  constructor(
    private satellitesService: SatellitesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.satelliteLocations$ =
              this.satellitesService.getVisibleSatelliteLocations(
                position.coords.latitude,
                position.coords.longitude
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

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  public showSatelliteDetails(satellite: SatelliteLocation) {
    this.selectedSatellite = satellite;
    this.isShowDetails = true;
  }
}
