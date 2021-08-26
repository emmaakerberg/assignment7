import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements CanActivate{

    private _loggedIn: boolean = false;

    constructor(private readonly _router: Router){
    }

    canActivate(): boolean {
        if (!this._loggedIn) {
            this._router.navigate(["/login"])
            return this._loggedIn
        }
        return this._loggedIn
    }

    public setLoggedIn(status: boolean) {
        this._loggedIn = status;
    }

    public getLoggedInStatus() {
        return this._loggedIn;
    }

    
}