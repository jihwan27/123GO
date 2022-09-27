import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutRouterModule} from "./layout-router.module";
import {HeaderModule} from "../header/header.module";
import {MainModule} from "../main/main.module";
import {LoginModule} from "../login/login.module";
import { LeftSidePanelModule } from '../side-panels/right-side-panel/right-side-pannel.module';
import { RightSidePanelModule } from '../side-panels/left-side-panel/left-side-panel.module';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { FooterModule } from '../footer/footer.module';
import { BoardModule } from '../board/board.module';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainModule,
    LoginModule,
    LeftSidePanelModule,
    RightSidePanelModule,
    LayoutRouterModule,
    FooterModule,
    BoardModule,
    MapModule
  ],
  providers: [
    ApiService
  ]
})
export class LayoutModule { }
