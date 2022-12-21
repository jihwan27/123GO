import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {MainComponent} from "../main/components/main/main.component";
import { BoardComponent } from '../board/components/board.component';
import { CardTableComponent } from '../card/components/card-table/card-table.component';
import { UserPageComponent } from '../user-page/components/user-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main', component: MainComponent,
        loadChildren: () => import('../main/main.module').then(m => m.MainModule)
      },
      {
        path: 'board', component: BoardComponent,
        loadChildren: () => import('../board/board.module').then(m => m.BoardModule)
      },
      {
        path: 'card', component: CardTableComponent,
        loadChildren: () => import('../card/card.module').then(m => m.CardModule)
      },
      {
        path: 'user', component: UserPageComponent,
        loadChildren: () => import('../user-page/user-page.module').then(m => m.UserPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule { }
