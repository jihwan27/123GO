import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "../main/components/main/main.component";
import { BoardComponent } from '../board/components/board.component';
import { MapComponent } from '../map/components/map/map.component';

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
        path: 'map', component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule { }
