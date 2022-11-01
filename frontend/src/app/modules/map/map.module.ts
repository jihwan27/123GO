import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapTableComponent } from './components/map-table/map-table/map-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { MapModalComponent } from './components/map-table/map-modal/map-modal.component';

@NgModule({
  declarations: [
    MapComponent,
    MapTableComponent,
    MapModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule
  ],
  exports: [
    MapComponent,
    MapTableComponent
  ]
})
export class MapModule { }