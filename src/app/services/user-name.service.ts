import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class UserNameService {

    private _userName: string | null;

    constructor(
        private readonly _router: Router,
        private readonly _loginService: LoginService
        ){
        this._userName = localStorage.getItem('userName');
    }

    canActivate(): boolean {
        console.log(this._userName)
        if (this._userName !== null) {
            this._loginService.setLoggedIn(true);
            this._router.navigate(["/pokemons"]);
            return false;
        }
        return true;
    }
}