import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePage {

    public userName :string | null = localStorage.getItem('userName');

    constructor(
        private readonly _loginService: LoginService,
        private readonly _router: Router) {

    }

    logOut() {
        localStorage.clear();
        this._loginService.setLoggedIn(false);
        this._router.navigate(['/login'])
    }

    goToPokemonsPage(){
        this._router.navigate(['/pokemons'])
    }

}