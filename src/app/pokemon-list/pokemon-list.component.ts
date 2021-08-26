import { Component, OnInit } from "@angular/core"
import { Pokemon } from "../models/pokemon.model";
import { CatchedPokemonService } from "../services/catched-pokemons.service";
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
    public pokemons: Pokemon[] = []
    
    constructor(
        private readonly _loginService: LoginService,
        private readonly _pokemonApiService: PokemonApiService,
        private readonly _catchedPokemonsService: CatchedPokemonService
        ) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    ngOnInit() : void {
        this.pokemons = this._pokemonApiService.pokemons;       
    }

    public catchPokemon(pokemon : Pokemon) {
        pokemon.catched = true;
        this._catchedPokemonsService.catchPokemon(pokemon);
    }
}