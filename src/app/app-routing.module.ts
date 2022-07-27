import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.module')
  //       .then(m => m.AuthModule)
  // },
  // {
  //   path: 'error',
  //   loadChildren: () =>
  //     import('./modules/errors/errors.module')
  //       .then(m => m.ErrorsModule)
  // },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/_layout/layout.module')
        .then(m => m.LayoutModule)
  },
  { path: '**', redirectTo: 'error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
