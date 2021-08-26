import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"
import { Pokemon } from "../models/pokemon.model";
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
        private readonly _pokemonApiService: PokemonApiService
        ) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    ngOnInit() : void {
        this._pokemonApiService.getPokemons(10)
            .subscribe(
                (pokemons: any) => {
                    (pokemons.results).forEach((pokemon: any) => {
                        this._pokemonApiService.getPokemon(pokemon.name)
                            .subscribe(
                                (pokemon: any) => {
                                    let tempPokemon: Pokemon ={
                                        name: pokemon.name,
                                        height: pokemon.height,
                                        weight: pokemon.weight,
                                        types: [...pokemon.types].map(t => t.type.name),
                                        sprites: pokemon.sprites,
                                        stats: [...pokemon.stats].map(s => s = {
                                            name: s.stat.name,
                                            base: s.base_stat
                                        }),
                                        abilities: [...pokemon.abilities].map(a => a.ability.name)
                                    }
                                    this.pokemons.push(tempPokemon)
                                }
                            )  
                    });
                },
                (error: HttpErrorResponse) => {
                    console.log(error)
                }
                
            )
    }

    

}