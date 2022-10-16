import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';
import { TransformationType, Direction } from 'angular-coordinates';
import { Utilities } from 'src/app/classes/utilities';

@Component({
  selector: 'app-satellite-details',
  templateUrl: './satellite-details.component.html',
  styleUrls: ['./satellite-details.component.scss'],
})
export class SatelliteDetailsComponent implements OnInit {
  @Input() satellite!: SatelliteLocation;
  @Output() closeModal = new EventEmitter();
  public transformationType = TransformationType;
  public direction = Direction;
  public decamelize = Utilities.decamelize;

  opened = true;

  constructor() {}

  ngOnInit(): void {}
}
