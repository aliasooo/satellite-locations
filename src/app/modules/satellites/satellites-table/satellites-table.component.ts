import { outputAst } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TransformationType, Direction } from 'angular-coordinates';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';

@Component({
  selector: 'app-satellites-table',
  templateUrl: './satellites-table.component.html',
  styleUrls: ['./satellites-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SatellitesTableComponent implements OnInit {
  @Input() satelliteLocations: SatelliteLocation[] = [];
  @Output() viewSatellite: EventEmitter<SatelliteLocation> = new EventEmitter();
  public transformationType = TransformationType;
  public direction = Direction;

  constructor() {}

  ngOnInit(): void {}
}
