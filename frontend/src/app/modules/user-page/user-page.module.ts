import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page.component';
import { WritingBoardComponent } from './components/writing-board/writing-board.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { UserInfoComponent } from './components/user-info/user-info.component';



@NgModule({
  declarations: [
    UserPageComponent,
    WritingBoardComponent,
    ArticleListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MaterialModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }