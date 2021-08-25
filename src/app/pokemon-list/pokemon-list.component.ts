import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";


@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

    public loggedIn: boolean;
    
    constructor(private readonly _loginService: LoginService) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    ngOnInit(): void {
        
    }

}