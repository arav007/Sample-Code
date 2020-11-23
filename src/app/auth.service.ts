import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() { }

  get CheckLoginStatus() {
    if (localStorage.getItem("isLoggedin")) {
      return true;
    } else {
      return false;
    }
  }
}
