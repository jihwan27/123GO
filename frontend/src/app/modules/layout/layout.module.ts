import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutRouterModule} from "./layout-router.module";
import {HeaderModule} from "../header/header.module";
import {MainModule} from "../main/main.module";
import {LoginModule} from "../login/login.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainModule,
    LoginModule,
    LayoutRouterModule
  ]
})
export class LayoutModule { }
