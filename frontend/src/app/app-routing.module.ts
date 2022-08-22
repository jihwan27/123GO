import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  }
  // {
  //   path: '',
  //   component: LayoutComponent
  // },
  // {
  //   path: 'main',
  //   component: MainComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
