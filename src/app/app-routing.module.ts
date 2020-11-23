import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth.guard";
const routes: Routes = [
  {
    path: "",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuardService],
    // canLoad: [AuthGuardCanLoadService]
  },
  {
    path: "**",
    loadChildren: "./login/login.module#LoginModule",
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
