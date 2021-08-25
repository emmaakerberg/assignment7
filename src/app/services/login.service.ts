import { Injectable, OnInit } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements CanActivate{

    private _loggedIn: boolean;
    private _userName: string | null;

    constructor(private _router: Router){
        this._loggedIn = false;
        this._userName = localStorage.getItem('userName');
        this.isLoggedIn();
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

    private isLoggedIn() {
        this._loggedIn = this._userName === null ? false : true;
    }
}