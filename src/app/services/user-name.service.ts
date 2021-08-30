import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
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
        this._userName = localStorage.getItem("userName");
    }

    /**
     * If username in local storage is not null, the user is allowed to navigate to /pokemons
     * @returns true if a user name is not set in local storage, else false 
     */
    canActivate(): boolean {
        if (this._userName !== null) {
            this._loginService.setLoggedIn(true);
            this._router.navigate(["/pokemons"]);
            return false;
        }
        return true;
    }

    /**
     * Get the user name saved in local storage and in the service
     */
    get userName() {
        return this._userName;
    }

    /**
     * @param name to save to the service
     */
    setUserName(name :string | null) {
        this._userName = name;
    }
}