import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./components/board.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/module/material.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MaterialModule
  ],
  exports: [BoardComponent],
  bootstrap: [BoardComponent]
})
export class BoardModule { }
