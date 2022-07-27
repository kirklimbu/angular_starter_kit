import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "./_layout/layout.component";
// import { AuthGuard } from "../modules/auth/_services/auth.guard";



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [


      // {
      //   path: "",
      //   redirectTo: "/dashboard",
      //   pathMatch: "full",
      // },
      // {
      //   path: "**",
      //   redirectTo: "error/404",
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
