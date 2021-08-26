import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { PokemonApiService } from "../services/pokemon-api.service";



@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

    public loggedIn: boolean;
    public userName :string | null = localStorage.getItem('userName');
    
    constructor(
        private readonly _loginService: LoginService,
        private readonly _pokemonApiService: PokemonApiService
        ) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    ngOnInit() : void {
        console.log('Here')
        this._pokemonApiService.getPokemons(10)
            .subscribe(
                (pokemons: any[]) => {
                    console.log(pokemons)
                },
                (error: HttpErrorResponse) => {
                    console.log(error)
                }
            )
    }
    

}