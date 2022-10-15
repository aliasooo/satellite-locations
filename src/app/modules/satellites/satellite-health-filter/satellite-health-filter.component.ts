import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular';
import { SatelliteLocation } from 'src/app/models/satellite-location.interface';

@Component({
  selector: 'app-satellite-health-filter',
  templateUrl: './satellite-health-filter.component.html',
  styleUrls: ['./satellite-health-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SatelliteHealthFilterComponent
  implements ClrDatagridFilterInterface<SatelliteLocation, any>
{
  public selectedValue = false;
  public state = { property: 'orbit.isHealthy', value: this.selectedValue };
  isActive(): boolean {
    return this.selectedValue;
  }

  changes: any = new EventEmitter<any>(false);

  toggleState(state: any) {
    this.selectedValue = state.value;
    this.state = { property: 'orbit.isHealthy', value: this.selectedValue };
    this.changes.emit(true);
  }

  accepts() {
    return this.selectedValue;
  }

  ngOnInit(): void {}
}
