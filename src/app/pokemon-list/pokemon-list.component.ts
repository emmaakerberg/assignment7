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
          this.getPokemonsApiCall()    
    }

    /*
    Populate the array of Pokemons with pokemons from the PokeApi using
    */
    getPokemonsApiCall() {
        this._pokemonApiService.populatePokemons()
        this.pokemons = this._pokemonApiService.pokemons; 
    }

    /**
     * Catch a pokemon by setting boolean catched to true and and it to the catched array
     * @param pokemon pokemon to catch
     */
    catchPokemon(pokemon : Pokemon) {
        pokemon.catched = true;
        this._catchedPokemonsService.catchPokemon(pokemon);
    }
}