import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";



@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

    public loggedIn: boolean;
    public userName :string | null = localStorage.getItem('userName');
    
    constructor(
        private readonly _loginService: LoginService
        ) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    

}