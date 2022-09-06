import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./components/main/main.component";
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { RecommendCourseComponent } from './components/recommend-course/recommend-course.component';
import { RecommendSubComponent } from './components/recommend-sub/recommend-sub.component';

@NgModule({
  declarations: [
    MainComponent,
    BannerImageComponent,
    RecommendSubComponent,
    RecommendCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
