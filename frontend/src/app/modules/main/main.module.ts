import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./components/main.component";
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { MainRecommendComponent } from './components/main-recommend/main-recommend.component';
import { MainRecommendTabComponent } from './components/main-recommend-tab/main-recommend-tab.component';



@NgModule({
  declarations: [
    MainComponent,
    BannerImageComponent,
    MainRecommendComponent,
    MainRecommendTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
