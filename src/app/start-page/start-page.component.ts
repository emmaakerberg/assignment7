import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html', 
    styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

    public loggedIn: boolean;

    constructor(
        private readonly loginService: LoginService,
        private readonly _router: Router
        ) {
        this.loggedIn = this.loginService.getLoggedInStatus();
    }
    ngOnInit(): void {
        console.log('Start page')
    }
    
    onLoggedInClicked() {
        this.loginService.setLoggedIn(true);
        this._router.navigate(['/pokemons'])
    }
}