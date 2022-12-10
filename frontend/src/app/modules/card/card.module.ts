import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTableComponent } from './components/card-table/card-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { CardModalComponent } from './components/card-modal/card-modal.component';

@NgModule({
  declarations: [
    CardTableComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule
  ],
  exports: [
    CardTableComponent
  ]
})
export class CardModule { }