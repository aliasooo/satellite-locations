import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';
import { SatellitesService } from 'src/app/services/satellites.service';

@Component({
  selector: 'app-list-satellites',
  templateUrl: './list-satellites.component.html',
  styleUrls: ['./list-satellites.component.scss'],
})
export class ListSatellitesComponent implements OnInit, AfterViewChecked {
  public satelliteLocations: SatelliteLocation[] = [];

  constructor(
    private satellitesService: SatellitesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.satellitesService.getSatelliteLocations().subscribe({
      next: (satellites) => {
        this.satelliteLocations = satellites;
      },
    });
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }
}
