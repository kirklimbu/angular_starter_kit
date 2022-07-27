import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
// import { UserModel } from "../_models/user.model";
import { Store } from "@ngxs/store";
// import { AuthState } from "../login/state/login.state";
import { from } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  // user!: UserModel;
  constructor(private router: Router, private store: Store) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // let token = this.authService.getAuthFromLocalStorage();
    // if (!token) {
    //   this.router.navigate(["/auth/login"]);
    //   return false;
    // }
    // return true;
    // const isAuthenticated = this.store.selectSnapshot(
    //   AuthState.isAuthenticated
    // );
    // console.log('authen authgurard',isAuthenticated);

    // return isAuthenticated;
    // if (!isAuthenticated) {
    //   return from(this.router.navigate(["/auth/login"]));
    // }
    return true;
  }
}
