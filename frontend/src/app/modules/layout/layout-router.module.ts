import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "../main/components/main/main.component";
import { BoardComponent } from '../board/components/board.component';
import { MapTableComponent } from '../map/components/map-table/map-table/map-table.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main', component: MainComponent
      },
      {
        path: 'board', component: BoardComponent
      },
      {
        path: 'map', component: MapTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule { }
