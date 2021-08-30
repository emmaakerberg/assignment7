import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements CanActivate{

    private _loggedIn: boolean = false;

    constructor(
        private readonly _router: Router
        ){}

    /**
     * If a user is logged in, return true otherwise return false and navigates 
     * the user to the login page
     * @returns true if logged in, false if not
     */
    canActivate(): boolean {
        if (!this._loggedIn) {
            this._router.navigate(["/login"])
            return this._loggedIn
        }
        return this._loggedIn
    }

    /** 
     * @param status true if user should be logged in, false if not
     */
    public setLoggedIn(status: boolean) {
        this._loggedIn = status;
    }

    /**
     * @returns the status of the loggedIn boolean, true if logged in
     */
    public getLoggedInStatus() {
        return this._loggedIn;
    }

    
}