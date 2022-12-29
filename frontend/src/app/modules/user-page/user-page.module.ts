import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './components/user-page.component';
import { WritingBoardComponent } from './components/writing-board/writing-board.component';
import { ArticleListComponent } from './components/article-list/article-list.component';



@NgModule({
  declarations: [
    UserPageComponent,
    WritingBoardComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }